import { attachPropertiesToComponent } from '../../core/helpers';
import Popup from './Popup';
import PopupHeader from './PopupHeader';

export default attachPropertiesToComponent(Popup, {
  Header: PopupHeader,
});
