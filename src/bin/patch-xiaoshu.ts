#! /usr/bin/env node

/**
 * 给小暑组件库打补丁
 * 目的：删除小暑组件库package.json里react-native字段
 */
const path = require('path');
const fs = require('fs');

// 要打补丁的包名
const packageNames: any[] = [];

// 项目根目录
const root = process.cwd();

function patchXiaoShu() {
  packageNames.forEach((name) => {
    // 找到package.json文件
    const pak = path.join(root, 'node_modules', name, 'package.json');
    // 将package.json解析成json对象
    const pakJson = JSON.parse(fs.readFileSync(pak, 'utf-8'));
    // 如果package.json存在react-native字段，则删掉
    if ('react-native' in pakJson) {
      delete pakJson['react-native'];
      fs.writeFileSync(pak, JSON.stringify(pakJson));
    }
  });
  console.log('success: 小暑组件库打补丁完成');
}

patchXiaoShu();
