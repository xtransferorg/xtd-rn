import Progress from './Progress';
import { attachPropertiesToComponent } from '../../core/helpers';
import { line, circle } from './instance';

export type { ProgressProps } from './interface';
export default attachPropertiesToComponent(Progress, {
  Line: line,
  Circle: circle,
});
