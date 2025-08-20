import NoticeBar from './NoticeBar';
import { attachPropertiesToComponent } from '../../core/helpers';
import { remind, warn, fail, success } from './instance';

export default attachPropertiesToComponent(NoticeBar, {
  remind,
  warn,
  fail,
  success,
});
