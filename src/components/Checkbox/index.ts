import { attachPropertiesToComponent } from '../../core/helpers';
import Checkbox from './Checkbox';
import Group from './CheckboxGroup';
import CheckBoxIcon from './CheckboxIcon';

export default attachPropertiesToComponent(Checkbox, {
  Group,
  Icon: CheckBoxIcon,
});
