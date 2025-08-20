import React, { useState } from 'react';
import {
  Button,
  LangType,
  Provider,
  ThemeToken,
  Radio,
  Field,
  Space,
} from '@xrnjs/ui';
import Card from '_global/Card';
import Customer from './Customer';

const Demo = () => {
  const [langType, setLangType] = useState(LangType.zh_CN);

  const [userThemeToken, setUserThemeToken] = useState<Partial<ThemeToken>>({
    '--color-primary-6': 'red', // 仅覆盖主题色--color-primary-6，其余默认配置
  });

  return (
    // 多语言配置langType & 主题配置theme
    <Provider langType={langType} theme={userThemeToken}>
      <Space>
        <Card>
          <Radio
            value={langType}
            options={[
              { label: '英文', value: LangType.en_US },
              { label: '中文', value: LangType.zh_CN },
              { label: '繁体', value: LangType.zh_HK },
            ]}
            onChange={(v) => setLangType(v as LangType)}
          />
          <Field label="多语言显示：" layout="horizontal" showDividerLine />
        </Card>

        <Card>
          <Radio
            value={userThemeToken['--color-primary-6']}
            options={[
              { label: '红色', value: 'red' },
              { label: '蓝色', value: 'blue' },
              { label: '绿色', value: 'green' },
            ]}
            onChange={(v) =>
              setUserThemeToken({ '--color-primary-6': v as string })
            }
          />
          <Button>主题色</Button>

          <Customer />
        </Card>
      </Space>
    </Provider>
  );
};

export default Demo;
