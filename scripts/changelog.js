const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const { types } = require('../.versionrc.js');
const {
  meta: { componentDir },
  repository,
} = require('../package.json');

const CHANGE_LOG = '__changelog__';
const SPLIT = '__________';
const allowTypes = ['feat', 'fix', 'style', 'perf'];
const allowIcon = ['🚀 ', '🐛 ', '🎨 ', '⚡️ '];

const { exec } = require('child_process');
const { cloneDeep, isNil, uniqBy } = require('lodash');

/**
 * 获取 Git 日志
 * @returns {Promise<string[]>}
 */
function getGitLog() {
  return new Promise((resolve, reject) => {
    exec(
      `git log --date=local --date-order --pretty=format:"%s${SPLIT}%ad${SPLIT}%H${SPLIT}%h"`,
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve(stdout.trim().split('\n'));
        }
      }
    );
  });
}

/**
 * 获取单个 Git 标签的创建时间
 * @param {string} tag
 * @returns {Promise<{ tag: string, created: number }>}
 */
function getTagInfo(tag) {
  return new Promise((resolve, reject) => {
    exec(`git show -s --format="%ai" ${tag}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        const created = stdout.trim().split('\n').pop();
        resolve({ tag, created });
      }
    });
  });
}

/**
 * 获取 Git 标签
 * @returns {Promise<{ tag: string, created: number }[]>}
 */
function getGitTags() {
  return new Promise((resolve, reject) => {
    exec('git tag --list', (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        const tags = stdout.trim().split('\n');

        const promises = tags.map(getTagInfo);
        Promise.all(promises)
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  });
}

/**
 * 根据标签分组 Git 日志
 * @param {Record<string, { type: string, message: string, time: number, hash: string, shortHash: string, component: string }[]>} p1
 * @param {{ tag: string, created: number }[]} p2
 * @returns {Record<string, Record<string, { type: string, message: string }[]>>}
 */
function groupByTag(p1, p2) {
  const data = cloneDeep(p1);
  const tags = cloneDeep(p2);
  const result = {};

  for (const component in data) {
    result[component] = {};
    for (const tag of tags) {
      result[component][tag.tag] = data[component]
        .filter((log) => log.time <= tag.created)
        .reduce((acc, p2) => {
          const cur = cloneDeep(p2);
          const item = acc.find((item) => item.type === cur.type);
          if (item) {
            item.message += `\n* ${cur.message}`;
          } else {
            acc.push(cur);
          }
          return acc;
        }, []);
      if (result[component][tag.tag].length === 0) {
        delete result[component][tag.tag];
      }
      data[component] = data[component].filter((log) => log.time > tag.created);
    }
  }

  return result;
}

/**
 * 检查文件所在的目录是否存在,如果不存在则创建目录
 * @param {string} filePath
 * @param {string} [defaultData='']
 */
function readOrCreateFile(filePath, defaultData = '') {
  // 检查文件所在的目录是否存在
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    // 如果目录不存在,则创建目录
    fs.mkdirSync(dirPath, { recursive: true });
  }

  return fs.writeFileSync(filePath, defaultData);
}

/**
 * 将 Git 日志格式化为 Markdown
 * @param {Record<string, Record<string, { type: string, message: string }[]>>} data
 * @returns {{ component: string, markdown: string }[]}
 */
function formatToMarkdown(data) {
  const results = [];
  for (const component in data) {
    let result = '';
    result += `## ${component}\n`;
    const entries = Object.entries(data[component]);
    entries.reverse();
    for (const [tag, list] of entries) {
      result += `\n### ${tag}\n`;
      for (const log of list) {
        const type =
          types.find((type) => log.type === type.type)?.section || log.type;
        result += `\n#### ${type}\n`;
        result += `* ${log.message}\n`;
      }
    }
    results.push({
      component,
      markdown: result,
    });
  }
  return results;
}

/**
 * 将 Markdown 格式的变更日志写入文件
 * @param {Record<string, { type: string, message: string, time: number, hash: string, shortHash: string, component: string }[]>} logs
 * @param {{ tag: string, created: number }[]} tags
 */
function writeChangelogToFile(logs, tags) {
  const data = groupByTag(logs, tags);
  const markdown = formatToMarkdown(data);
  markdown.forEach(({ component, markdown }) => {
    const filePath = path.join(
      __dirname,
      '..',
      componentDir,
      component,
      CHANGE_LOG,
      `index.md`
    );
    // 写入文件
    readOrCreateFile(filePath, markdown);
  });
}

const isNumberRegex = /^\d+$/;

function formatTag(tag) {
  const [major, minor, patch] = tag.slice(1).split('-')[0].split('.');
  return {
    major,
    minor,
    patch,
  };
}

function isReleaseTag(tag) {
  const { major, minor, patch } = formatTag(tag);
  return (
    isNumberRegex.test(major) &&
    isNumberRegex.test(minor) &&
    isNumberRegex.test(patch) &&
    isNil(tag.split('-')[1])
  );
}

(async () => {
  const tags = (await getGitTags())
    .filter((tag) => {
      const { major, minor } = formatTag(tag.tag);
      if (isNumberRegex.test(major) && isNumberRegex.test(minor)) {
        // 过滤 0.1.xxxx 之前的信息
        return !(major == 0 && minor <= 1);
      }
      return false;
    })
    .map((tag) => {
      return {
        tag: tag.tag,
        created: dayjs(tag.created).valueOf(),
      };
    })
    .sort((a, b) => a.created - b.created)
    .reduce((prev, curr) => {
      if (isReleaseTag(curr.tag)) {
        prev = prev.filter((item) => {
          const v1 = formatTag(item.tag);
          const v2 = formatTag(curr.tag);
          return !(
            v1.major === v2.major &&
            v1.minor === v2.minor &&
            v1.patch === v2.patch
          );
        });
      }
      prev.push(curr);
      return prev;
    }, []);

  let logs = (await getGitLog()).filter((log) => {
    const type = log.split(':')[0].trim();
    return (
      /\([A-Z].+\)/.test(type) &&
      allowTypes.some((allowType) => type.startsWith(allowType))
    );
  });

  logs = uniqBy(
    logs.map((log) => {
      const p1 = log.split(': ')[0];
      const p2 = log.split(': ')[1];
      const hash = p2.trim().split(SPLIT)[2];
      const shortHash = p2.trim().split(SPLIT)[3];
      const type = p1.trim().replace(/\(.+\)/g, '');
      const index = allowTypes.findIndex((item) => item === type);
      const message =
        (allowIcon[index] || '') + p2.trim().split(SPLIT)[0] +
        ` ([${shortHash}](${repository}/commit/${hash}))`;

      return {
        type: type,
        message: message,
        time: dayjs(p2.trim().split(SPLIT)[1]).valueOf(),
        hash: hash,
        shortHash: shortHash,
        component: p1
          .match(/\([A-Z].+\)/)[0]
          .replace('(', '')
          .replace(')', ''),
      };
    }),
    'message'
  ).reduce((acc, cur) => {
    if (!acc[cur.component]) {
      acc[cur.component] = [];
    }
    acc[cur.component].push(cur);
    return acc;
  }, {});

  writeChangelogToFile(logs, tags);
})();
