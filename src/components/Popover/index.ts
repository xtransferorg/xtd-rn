import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';

import Popover from './popover';
import PopoverItem from './popover-item';
import PopoverText from './popover-text';
import { varCreator, styleCreator } from './styles/popover.style';

export default attachPropertiesToComponent(Popover, {
  varCreator,
  styleCreator,
  Item: PopoverItem,
  Text: PopoverText,
});
