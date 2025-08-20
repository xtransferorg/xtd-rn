import { attachPropertiesToComponent } from '../../core/helpers';
import { Instance, close, closeAll } from './FloatingLayerInstance';
import FloatingLayer from './FloatingLayer';

export default attachPropertiesToComponent(FloatingLayer, {
  open: Instance,
  close,
  closeAll,
});
