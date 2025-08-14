import List from './List';
import ListItem from './ListItem';

import { attachPropertiesToComponent } from '../../core/helpers';

export default attachPropertiesToComponent(List, {
  Item: ListItem,
});
