import { FC, useContext, useEffect, useMemo, useState } from 'react';
import React from 'react';
import { AnchorLink, context } from 'dumi/theme';
import Button from 'antd/lib/button';
import Drawer from 'antd/lib/drawer';
import Markdown from 'react-markdown/react-markdown.min.js';
import 'dumi-theme-default/es/components/SlugList.less';
import 'antd/lib/button/style';
import 'antd/lib/drawer/style';

const SlugsList: FC<{ slugs: any; className?: string }> = ({
  slugs,
  ...props
}) => {
  const { meta } = useContext(context);
  const [open, setOpen] = useState(false);

  return (
    <div className='slug'>
      {meta.__changelog__ && (
        <>
          <Button onClick={() => setOpen(true)} className="changelog" size="small" type="ghost">变更记录</Button>
          <Drawer
            title="变更日志"
            placement="right"
            onClose={() => setOpen(false)}
            width={560}
            open={open}
          >
            <Markdown className="markdown _markdown">
              {meta.__changelog__.slice(1, -1).replace(/_____/g, '\n')}
            </Markdown>
          </Drawer>
        </>
      )}
      <ul role="slug-list" {...props}>
        {slugs
          .filter(({ depth }) => depth > 1 && depth < 4)
          .map((slug) => (
            <li key={slug.heading} title={slug.value} data-depth={slug.depth}>
              <AnchorLink to={`#${slug.heading}`}>
                <span>{slug.value}</span>
              </AnchorLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SlugsList;
