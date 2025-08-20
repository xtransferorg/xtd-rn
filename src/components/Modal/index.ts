import Modal from './Modal';
import { attachPropertiesToComponent } from '../../core/helpers';
import {
  confirm,
  Instance,
  info,
  warning,
  error,
  success,
} from './ModalInstance';

export default attachPropertiesToComponent(Instance, {
  Component: Modal,
  confirm,
  info,
  warning,
  error,
  success,
});
