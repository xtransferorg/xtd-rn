#!/usr/bin/env node
const { version } = require('../package.json');

function log(...args) {
  console.log('XTD_RN', ...args);
}

!(async function run() {
  log('开始执行发布脚本');

  const execShPromise = require('exec-sh').promise;
  const tag = process.argv[process.argv.length - 1];

  log('当前环境: ', tag);

  const cwd = process.cwd();

  log('当前程序执行路径: ', cwd);

  const step1 = await execShPromise('yarn build');

  log('编译结果: ', step1);

  const gitSh = await execShPromise(`git rev-parse --abbrev-ref HEAD`, true);
  // 替换分支名中的下划线
  const branch = gitSh.stdout.trim();
  const betaTag = branch.replace(/_/g, '-');

  if (tag === 'beta') {
    await execShPromise(`yarn release -- --prerelease ${betaTag}`);
    await execShPromise(
      `git push --follow-tags origin ${branch} && npm publish --tag beta`
    );
  } else if (branch === 'master' || tag === 'prod') {
    // captain中包含自动升级的逻辑，所以这里只需要生成changelog
    await execShPromise('yarn release');
    // 手动提交changelog
    await execShPromise(
      `git commit -m "chore(release): ${version}"`
    );
    await execShPromise(
      `git push --follow-tags origin ${branch} && npm publish`
    );
  } else {
    console.log('当前分支不是master,也没有beta标记，不允许发布');
    process.exit();
  }

  log('发布完成');
})();
