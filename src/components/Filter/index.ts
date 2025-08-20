import Filter from './Filter';
import FilterItem from './FilterItem';
import { Dropdown as XSDropdown } from '../../core';

import { attachPropertiesToComponent } from '../../core/helpers';

export default attachPropertiesToComponent(Filter, {
  Item: FilterItem,
  useFilterItemConfig: XSDropdown.useDropdownItemConfig,
});
