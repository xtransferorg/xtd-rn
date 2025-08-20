// import { ImageWidth } from '../style';
import { useEffect, useState } from 'react';
import { SCREEN_WIDTH } from '../../../utils/adapter';
import { ViewStyle } from 'react-native';

interface IProps {
  width: number;
  space: number;
  useContainerWidth: boolean;
  attachmentType: 'image' | 'credentials';
  defaultStyle?: ViewStyle;
  containerSpacing: number;
}

export const useContentStyle = ({
  width,
  space,
  useContainerWidth,
  attachmentType,
  containerSpacing,
}: IProps) => {
  // 鸿蒙：这里通过onLayout来获取width存在bug，刚开始没有渲染完时，获取到的width是0，导致页面会都抖动，所以这里给一个预估宽度
  const estimateBoxWidth =
    width === 0 ? SCREEN_WIDTH - containerSpacing * 2 : width;
  // 这里的-1 和 -0.1 是为了防止宽度计算是否换行时，小数点差异，导致提前换行
  const estimateItemWidth = (estimateBoxWidth - space * 2 - 1) / 3 - 0.1;
  // 这里defaultSize也有问题，默认宽高和计算出来的实际宽高不一致，导致有抖动, 默认宽高也使用预估值
  const defaultSize = { width: estimateItemWidth, height: estimateItemWidth };
  const [contentStyle, setContentStyle] = useState(defaultSize);
  const credentialsHeight = 138;

  useEffect(() => {
    const credentialsWidth =
      (SCREEN_WIDTH - containerSpacing - space - 1) / 2 - 0.1; // 鸿蒙适配
    const autoWidth = (estimateBoxWidth - space * 2 - 1) / 3 - 0.1; // 鸿蒙适配
    const sizeMap = useContainerWidth
      ? {
          image: {
            width: autoWidth,
            height: autoWidth,
          },
          credentials: {
            width: width,
            height: credentialsHeight,
          },
        }
      : {
          image: defaultSize,
          credentials: {
            width: credentialsWidth,
            height: credentialsHeight,
          },
        };

    const newStyle = sizeMap[attachmentType] || defaultSize;

    if (
      !(
        newStyle.width === contentStyle.width &&
        newStyle.height === contentStyle.height
      )
    )
      setContentStyle(sizeMap[attachmentType] || defaultSize);
  }, [width, space, useContainerWidth, attachmentType, containerSpacing]);

  return contentStyle;
};
