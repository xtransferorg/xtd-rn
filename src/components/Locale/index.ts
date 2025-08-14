import { attachPropertiesToComponent } from '../../core/helpers';

import Locale, { useLocale, useLangType, getLocale } from './locale';

export default attachPropertiesToComponent(Locale, {
  useLocale,
  useLangType,
  getLocale,
});
