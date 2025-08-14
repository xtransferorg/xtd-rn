import Tag from './Tag';

import { attachPropertiesToComponent } from '../../core/helpers';
import { processing, interrupt, terminate, error, success } from './instance';

export default attachPropertiesToComponent(Tag, {
  processing,
  interrupt,
  terminate,
  error,
  success,
});
