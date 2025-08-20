import { attachPropertiesToComponent } from '../../core/helpers';
import { PlacementType } from './enum';
import { useMeasure } from './hooks/useMeasure';
import Tour from './Tour';

export default attachPropertiesToComponent(Tour, {
  PlacementType,
  useMeasure,
});
