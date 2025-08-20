import React from 'react';
import { FaAndroid, FaApple, FaMobileAlt } from 'react-icons/fa'

const Platforms = () => {
  return (
    <section className="platforms">
      <div className="container">
        <div className="section-title">
          <h2>全面支持三端平台</h2>
          <p>一次编写，随处运行。xtd-rn 确保您的应用在所有主流平台上提供一致的用户体验。</p>
        </div>
        
        <div className="platform-cards">
          <div className="platform-card">
            <div className="platform-icon ios-icon">
              <FaApple />
            </div>
            <h3>iOS</h3>
            <p>完全适配 iOS 设计规范，提供流畅的动画和原生的用户体验。</p>
          </div>
          
          <div className="platform-card">
            <div className="platform-icon android-icon">
              <FaAndroid />
            </div>
            <h3>Android</h3>
            <p>遵循 Material Design 指南，完美适配各种 Android 设备和版本。</p>
          </div>
          
          <div className="platform-card">
            <div className="platform-icon harmony-icon">
              <FaMobileAlt />
            </div>
            <h3>HarmonyOS</h3>
            <p>专为 HarmonyOS 优化，支持分布式能力和全场景体验。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;