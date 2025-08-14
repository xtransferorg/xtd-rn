#!/bin/bash

node scripts/changelog.js

# 检查是否有文件被修改
if git diff --quiet --exit-code; then
    echo "No changes to commit."
else
    # 有文件被修改，执行 git add .
    git add .
    # 提交变更
    git commit -m "chore: update component changelog"
    git push
fi
