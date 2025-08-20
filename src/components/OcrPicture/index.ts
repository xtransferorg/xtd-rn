import { attachPropertiesToComponent } from '../../core/helpers';
import { open } from './OcrPictureInstance';
import OcrPicture from './OcrPicture';
import { OcrPictureDirection } from './interface';
import OcrCamera from './OcrCamera';

export default attachPropertiesToComponent(OcrPicture, {
  OcrCamera,
  open,
  OcrPictureDirection,
});
