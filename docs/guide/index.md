---
title: 简介
nav:
  title: 简介
  order: 1
  path: /guide
---

## 工程目录

```
|-- your project
    |-- .gitignore
    |-- example            (demo目录)
    |-- README.md
    |-- package.json      
    |-- tsconfig.json
    |-- docs               (dumi组件文档 md)
    |-- docs-dist          (dumi打包后静态资源)
    |-- .dumirc.ts         (dumi配置文件，修改后不用重新打包，支持配置文件热更新)
    |-- .dumi              (dumi的样式等定制化目录，不用管)
    |-- src
        |-- [组件库]  （比如公共组件库、业务组件库等）      
```

## 项目启动

* 安装依赖：在项目跟目录下执行命令 `yarn`
* 编译模块：在项目根目录下执行命令 `yarn build`，生成 `lib`文件夹

## Demo 启动
* 进入 `/example`目录，执行命令 `yarn`
  * ios：执行命令 `pod install`，安装ios依赖后，项目根目录下执行命令 `yarn ios`
  * android：执行命令 `yarn android`

## 单元测试

* 运行单测：在项目根目录执行命令 `yarn test`

## 本地文档
* 运行文档：在项目根目录执行命令 `yarn doc`
* 构建文档：在项目根目录执行命令 `yarn doc:build`

## 注意事项
1. 开发分支不需要手动修改package.json的版本号， 会根据当前分支自动升版本
2. 提交merge到master时， 将版本号修改到和master一致！！！
