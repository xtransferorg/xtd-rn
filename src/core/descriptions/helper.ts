import { DescriptionsItem, DescriptionsProps } from '../../components';

export const getComputedTitleAndContentStyles = (
  title: DescriptionsItem['title'],
  content: DescriptionsItem['content'],
  horizontal: DescriptionsProps['horizontal']
) => {
  let titleStyle = { flex: 1 };
  let contentStyle = { flex: 1 };

  try {
    if (
      horizontal &&
      typeof title === 'string' &&
      typeof content === 'string'
    ) {
      titleStyle = {
        flex: Math.max(1, title.length),
      };
      contentStyle = {
        flex: Math.max(1, content.length),
      };
    }
  } catch (error) {
    titleStyle = { flex: 1 };
    contentStyle = { flex: 1 };
  }

  return {
    titleStyle,
    contentStyle,
  };
};
