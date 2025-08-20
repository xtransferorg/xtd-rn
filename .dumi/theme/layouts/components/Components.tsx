import React from 'react';
import { FaBell, FaChartLine, FaLayerGroup, FaSlidersH } from 'react-icons/fa';

const Components = () => {
  return (
    <section className="components">
      <div className="container">
        <div className="section-title">
          <h2>丰富的组件集合</h2>
          <p>超过 50 个精心设计的组件，覆盖应用开发的方方面面</p>
        </div>
        
        <div className="component-grid">
          <div className="component-card">
            <div className="component-image">
              <FaSlidersH />
            </div>
            <div className="component-content">
              <h3>交互控件</h3>
              <p>按钮、开关、加载等交互元素，提供流畅的用户体验。</p>
              <div className="component-tags">
                <span className="tag">Button</span>
                <span className="tag">Switch</span>
                <span className="tag">Loading</span>
              </div>
            </div>
          </div>
          
          <div className="component-card">
            <div className="component-image">
              <FaLayerGroup />
            </div>
            <div className="component-content">
              <h3>布局组件</h3>
              <p>卡片、列表、间距等布局工具，构建结构化界面。</p>
              <div className="component-tags">
                <span className="tag">Card</span>
                <span className="tag">List</span>
                <span className="tag">Space</span>
              </div>
            </div>
          </div>
          
          <div className="component-card">
            <div className="component-image">
              <FaBell />
            </div>
            <div className="component-content">
              <h3>通知组件</h3>
              <p>弹窗、提示、通知等组件，优雅地传递信息。</p>
              <div className="component-tags">
                <span className="tag">Modal</span>
                <span className="tag">Toast</span>
                <span className="tag">NoticeBar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Components;