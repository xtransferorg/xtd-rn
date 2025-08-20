# 升级指南

## 破坏性更新

### 0.2.3-beta.2

* Select 中的 filterOption 函数参数发生了变化，第二个参数从 `Option[]` 转换为 `Option`
  * filterOption?: (value: string, options: <u>Option[]</u>) => boolean; -> filterOption?: (value: string, option: <u>Option</u>) => boolean;
