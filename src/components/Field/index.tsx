import Field from './Field';
import FieldTitle from './FieldTitle';
import { attachPropertiesToComponent } from '../../core/helpers';

export default attachPropertiesToComponent(Field, {
  Title: FieldTitle,
});
