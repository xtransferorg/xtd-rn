import { attachPropertiesToComponent } from '../../core/helpers';
import Card from './Card';
import CardBody from './card-body';

export default attachPropertiesToComponent(Card, {
  Body: CardBody,
});
