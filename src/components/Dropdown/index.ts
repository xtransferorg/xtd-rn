import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import { Dropdown as XSDropdown } from '../../core';
import { attachPropertiesToComponent } from '../../core/helpers';

export default attachPropertiesToComponent(Dropdown, {
  Item: DropdownItem,
  useDropdownConfig: XSDropdown.useDropdownConfig,
  useDropdownItemConfig: XSDropdown.useDropdownItemConfig,
});
