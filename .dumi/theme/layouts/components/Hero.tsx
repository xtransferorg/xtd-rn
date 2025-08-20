import { NavLink } from 'dumi/theme';
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            构建跨平台应用 <span>从未如此简单</span>
          </h1>
          <p>
            xtd-rn 是一个现代化的 React Native 组件库，为 iOS、Android 和
            HarmonyOS 提供一致、高效且美观的 UI
            组件，帮助开发者快速构建高质量的三端应用。
          </p>
          <div className="nav-buttons">
            <button className="btn btn-primary" ><NavLink to="/guide">开始使用</NavLink></button>
            <button className="btn btn-outline" ><NavLink to="/component">查看组件</NavLink></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
