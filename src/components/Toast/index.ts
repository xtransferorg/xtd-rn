import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';

import {
  Instance,
  loading,
  success,
  fail,
  warn,
  setDefaultOptions,
  resetDefaultOptions,
  remove,
  removeAll,
} from './toast-instance';

export default attachPropertiesToComponent(Instance, {
  loading,
  success,
  fail,
  warn,
  setDefaultOptions,
  resetDefaultOptions,
  remove,
  removeAll,
});
