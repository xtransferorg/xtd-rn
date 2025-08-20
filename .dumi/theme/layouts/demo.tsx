import React from 'react';
import { Provider, LangType } from '@xrnjs/ui';

import './demo.less';

// @ts-ignore
const MobileDemoLayout: React.FC = ({ children }) => {
  return (
    <div
      className="xiaoshu-mobile-demo"
      style={{ userSelect: 'none' }}
    >
      <Provider
        theme={{
          '--color-primary-1': '#16b1cf',
          '--color-primary-2': '#17b9d9',
          '--color-primary-3': '#18c2e3',
          '--color-primary-4': '#20c6e7',
          '--color-primary-5': '#2ac9e8',
          '--color-primary-6': '#39cdea',
          '--color-primary-7': '#3eceea',
          '--color-primary-8': '#49d1eb',
          '--color-primary-9': '#53d3ec',
          '--color-primary-10': '#5dd6ed',
        }}
        langType={
          (localStorage.getItem('_dumi_lang') as LangType) || LangType.zh_CN
        }
      >
        {children}
      </Provider>
    </div>
  );
};

export default MobileDemoLayout;
