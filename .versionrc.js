module.exports = {
  header: `---
title: xrn-ui
nav:
  path: /changelog
group:
  title: xrn-ui
  path: /xrn-ui
---

# 变更日志

`,
  types: [
    { type: 'feat', section: '新功能' },
    { type: 'fix', section: '问题修复' },
    { type: 'chore', hidden: true },
    { type: 'docs', hidden: true },
    { type: 'style', section: '样式' },
    { type: 'refactor', hidden: true },
    { type: 'perf', section: '性能优化' },
    { type: 'test', hidden: true }
  ],
  scripts: {
    postchangelog: "cp CHANGELOG.md docs/CHANGELOG.md && git add .",
    posttag: "sh changelog.sh",
  }
};
