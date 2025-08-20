import { NavLink } from 'dumi/theme';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>xtd-rn</h3>
            <p>现代化的 React Native 组件库，支持 iOS、Android 和 HarmonyOS 三端平台。</p>
          </div>
          
          <div className="footer-column">
            <h3>资源</h3>
            <ul className="footer-links">
              <li><NavLink to="/guide">文档</NavLink></li>
              <li><NavLink to="/component">组件示例</NavLink></li>
              <li><NavLink to="https://github.com/xtransferorg/xtd-rn">GitHub 仓库</NavLink></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>社区</h3>
            <ul className="footer-links">
              <li><NavLink to="https://github.com/xtransferorg/xtd-rn/issues">讨论</NavLink></li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          &copy; 2025 xrn-ui 组件库
        </div>
      </div>
    </footer>
  );
};

export default Footer;