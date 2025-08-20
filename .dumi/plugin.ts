import { IApi } from 'umi';
import path from 'path';
import fs from 'fs/promises';

export default (api: IApi) => {
  api.onPatchRoute(async ({ route }) => {
    if (typeof route.component === 'string') {
      const filePath = route.component.split('/').slice(0, -1).join('/');
      const changLogPath = path.join(filePath, '__changelog__/index.md');
      try {
        // 判断文件是否存在
        await fs.access(changLogPath);
        const file = await fs.readFile(changLogPath, 'utf-8');
        route.meta = {
          ...route.meta,
          __changelog__: JSON.stringify(file.replace(/[\r\n]/g, '_____')),
        };
      } catch {}
    }
  });
};
