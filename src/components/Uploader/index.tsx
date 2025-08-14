import { attachPropertiesToComponent } from '../../core/helpers';
import Uploader from './Uploader';
import UploaderBody from './UploaderBody';
import { UploadFileTypes, UploadListTypes, UploadWays } from './enum';

export default attachPropertiesToComponent(Uploader, {
  UploaderBody,
  UploadListTypes,
  UploadFileTypes,
  UploadWays,
});
