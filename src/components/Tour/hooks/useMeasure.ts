import { useRef, useState, useEffect, useCallback } from 'react';
import { LayoutRectangle, NativeMethods, View } from 'react-native';

/**
 * 快捷创建目前组件ref & 获取相对位置、宽高信息
 * @param refresh 刷新重新获取
 * @returns {ref: 目标组件ref, layout:相对屏幕的位置+自身宽高, onLayout:布局变化通知}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useMeasure<T extends NativeMethods = View>(refresh?: any) {
  const ref = useRef<T>(null);
  const [layout, setLayout] = useState<LayoutRectangle>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  // 内部再次获取数据进行校验，尽量获取最终的渲染数据
  const [selfRefresh, setSelfRefresh] = useState(false);

  const doMeasure = () => {
    ref.current?.measure?.((_x, _y, w, h, px, py) => {
      // console.log('useEffect measure===', { _x, _y, w, h, px, py });
      // 是否有变化？
      if (
        !(
          [layout.x, layout.y, layout.width, layout.height].join(',') ===
          [px, py, w, h].join(',')
        )
      ) {
        const layoutPage = {
          x: px ?? 0,
          y: py ?? 0,
          width: w ?? 0,
          height: h ?? 0,
        };

        setLayout(layoutPage);
        //有变化则再次获取一次验证，确保满足大多数情况的，其余情况则由业务手动触发refresh
        setTimeout(() => setSelfRefresh(() => !selfRefresh), 200);
      }
    });
  };

  const onLayout = useCallback(() => {
    if (ref?.current) {
      doMeasure();
    }
  }, [ref]);

  useEffect(() => {
    doMeasure();
  }, [refresh, selfRefresh, ref]);

  return {
    ref,
    layout,
    onLayout,
    refresh: onLayout,
  };
}
