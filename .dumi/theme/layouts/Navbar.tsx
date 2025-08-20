import type { FC, MouseEvent } from 'react';
import React, { useContext } from 'react';
import { context, Link, NavLink } from 'dumi/theme';
import LocaleSelect from 'dumi-theme-default/es/components/LocaleSelect';
import 'dumi-theme-default/es/components/Navbar.less';
import 'antd/lib/dropdown/style';

export enum LangType {
  en_US = 'en_US',
  en_UK = 'en_UK',
  zh_CN = 'zh_CN',
  zh_HK = 'zh_HK',
}

interface INavbarProps {
  location: any;
  navPrefix?: React.ReactNode;
  darkPrefix?: React.ReactNode;
  onMobileMenuClick: (ev: MouseEvent<HTMLButtonElement>) => void;
}

const Navbar: FC<INavbarProps> = ({
  onMobileMenuClick,
  navPrefix,
  location,
  darkPrefix,
}) => {
  const {
    base,
    config: { mode, title, logo },
    nav: navItems,
  } = useContext(context);

  return (
    <div className="__dumi-default-navbar" data-mode={mode}>
      {/* menu toogle button (only for mobile) */}
      <button
        className="__dumi-default-navbar-toggle"
        onClick={onMobileMenuClick}
      />
      {/* logo & title */}
      <Link
        className="__dumi-default-navbar-logo"
        style={{
          // @ts-ignore
          backgroundImage: logo && `url('${logo}')`,
        }}
        to={base}
        data-plaintext={logo === false || undefined}
      >
        {title}
      </Link>
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        {navPrefix}
        {/* nav */}
        {navItems.map((nav) => {
          const child = Boolean(nav.children?.length) && (
            <ul>
              {nav.children.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              ))}
            </ul>
          );

          return (
            <span key={nav.title || nav.path}>
              {nav.path ? (
                <NavLink to={nav.path} key={nav.path}>
                  {nav.title}
                </NavLink>
              ) : (
                nav.title
              )}
              {child}
            </span>
          );
        })}
        <div className="__dumi-default-navbar-tool" style={{ minWidth: 40 }}>
          <LocaleSelect location={location} />
          {darkPrefix}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
