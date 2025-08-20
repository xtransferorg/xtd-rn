import React from 'react';

const Installation = () => {
  return (
    <section className="installation">
      <div className="container">
        <div className="section-title">
          <h2>快速开始</h2>
          <p>只需几分钟即可将 xtd-rn 集成到您的项目中</p>
        </div>
        
        <div className="install-steps">
          <div className="step">
            <h3>
              <span className="step-number">1</span>
              安装依赖
            </h3>
            <div className="code-block">
              yarn add @xrnjs/ui
            </div>
          </div>
          
          <div className="step">
            <h3>
              <span className="step-number">2</span>
              导入组件
            </h3>
            <div className="code-block">
              {"import { Button, Card } from '@xrnjs/ui';"}
            </div>
          </div>
          
          <div className="step">
            <h3>
              <span className="step-number">3</span>
              开始使用
            </h3>
            <div className="code-block">
              &lt;Button {"block={false} onPress={() => {}}"}&gt;<br />
              &nbsp;&nbsp;点击我<br />
              &lt;/Button&gt;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;