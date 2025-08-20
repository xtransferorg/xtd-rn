import Notification from './Notification';
import { attachPropertiesToComponent } from '../../core/helpers';
import {
  info,
  error,
  warning,
  success,
  useNotification,
} from './NotificationInstance';

export default attachPropertiesToComponent(Notification, {
  info,
  error,
  warning,
  success,
  useNotification,
});
