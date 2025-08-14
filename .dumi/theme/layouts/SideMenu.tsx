import { FC, useEffect, useState } from 'react';
import React, { useContext } from 'react';
import { context, Link, NavLink } from 'dumi/theme';
import LocaleSelect from 'dumi-theme-default/es/components/LocaleSelect';
import Select from 'antd/lib/select';
import SlugList from 'dumi-theme-default/es/components/SlugList';
import 'dumi-theme-default/es/components/SideMenu.less';
import 'antd/lib/select/style';
import './SideMenu.less';

interface INavbarProps {
  mobileMenuCollapsed: boolean;
  location: any;
  darkPrefix?: React.ReactNode;
}

const SideMenu: FC<INavbarProps> = ({
  mobileMenuCollapsed,
  location,
  darkPrefix,
}) => {
  const {
    config: {
      logo,
      title,
      description,
      mode,
      locales: [{ name: version }],
      repository: { url: repoUrl },
    },
    menu,
    nav: navItems,
    base,
    meta,
  } = useContext(context);
  const c1 = useContext(context);
  const isHiddenMenus =
    Boolean((meta.hero || meta.features || meta.gapless) && mode === 'site') ||
    meta.sidemenu === false ||
    undefined;

  const [versionList, setVersionList] = useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    fetch('/xt/xrn-ui/version.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'nx-anti-csrf-token': '1',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const versionList = res
          .filter((item) => {
            const version = item.split('.');
            if (version[0] === '0') {
              return version[1] === '2';
            }
            return true;
          })
          .map((item: any) => {
            return {
              value: item,
              label: 'v' + item,
            };
          });
        setVersionList(versionList);
      });
  }, []);

  return (
    <div
      className="__dumi-default-menu"
      data-mode={mode}
      data-hidden={isHiddenMenus}
      data-mobile-show={!mobileMenuCollapsed || undefined}
    >
      <div className="__dumi-default-menu-inner">
        <div className="__dumi-default-menu-header">
          <Link
            to={base}
            className="__dumi-default-menu-logo"
            style={{
              // @ts-ignore
              backgroundImage: logo && `url('${logo}')`,
            }}
          />
          <h1>{title}</h1>
          <p>{description}</p>
          {/* github star badge */}
          {/* @ts-ignore */}
          {/github\.com/.test(repoUrl) && mode === 'doc' && (
            <p>
              <object
                type="image/svg+xml"
                data={`https://img.shields.io/github/stars${
                  // @ts-ignore
                  repoUrl.match(/((\/[^\/]+){2})$/)[1]
                }?style=social`}
              />
            </p>
          )}
        </div>
        {/* mobile nav list */}

        <div className="__dumi-default-menu-mobile-area">
          {!!navItems.length && (
            <ul className="__dumi-default-menu-nav-list">
              {navItems.map((nav) => {
                const child = Boolean(nav.children?.length) && (
                  <ul>
                    {nav.children.map((item) => (
                      <li key={item.path || item.title}>
                        <NavLink to={item.path}>{item.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                );

                return (
                  <li key={nav.path || nav.title}>
                    {nav.path ? (
                      <NavLink to={nav.path}>{nav.title}</NavLink>
                    ) : (
                      nav.title
                    )}
                    {child}
                  </li>
                );
              })}
            </ul>
          )}
          {/* site mode locale select */}
          <LocaleSelect location={location} />
          {darkPrefix}
        </div>
        {/* menu list */}
        <ul className="__dumi-default-menu-list">
          {
            <div
              style={{ paddingLeft: 58, paddingRight: 24, marginBottom: 20 }}
            >
              <Select
                showSearch
                size="small"
                className='version-select'
                options={versionList}
                defaultValue={version}
                style={{ width: 160 }}
                onChange={(value) => {
                  window.location.href = `/xt/xrn-ui/${value}/component`;
                }}
              />
            </div>
          }
          {!isHiddenMenus &&
            menu.map((item) => {
              // always use meta from routes to reduce menu data size
              const hasSlugs = Boolean(meta.slugs?.length);
              const hasChildren =
                item.children && Boolean(item.children.length);
              const show1LevelSlugs =
                meta.toc === 'menu' &&
                !hasChildren &&
                hasSlugs &&
                item.path === location.pathname.replace(/([^^])\/$/, '$1');
              const menuPaths = hasChildren
                ? // @ts-ignore
                  item.children.map((i) => i.path)
                : [
                    item.path,
                    // handle menu group which has no index route and no valid children
                    location.pathname.startsWith(`${item.path}/`) &&
                    meta.title === item.title
                      ? location.pathname
                      : null,
                  ];

              return (
                <li key={item.path || item.title}>
                  <NavLink
                    to={item.path}
                    isActive={() => menuPaths.includes(location.pathname)}
                  >
                    {item.title}
                  </NavLink>
                  {/* group children */}
                  {Boolean(item.children && item.children.length) && (
                    <ul>
                      {/* @ts-ignore */}
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <NavLink to={child.path} exact>
                            <span>{child.title}</span>
                          </NavLink>
                          {/* group children slugs */}
                          {Boolean(
                            meta.toc === 'menu' &&
                              typeof window !== 'undefined' &&
                              child.path === location.pathname &&
                              hasSlugs
                          ) && <SlugList slugs={meta.slugs} />}
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* group slugs */}
                  {show1LevelSlugs && <SlugList slugs={meta.slugs} />}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
