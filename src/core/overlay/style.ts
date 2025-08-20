import { TokensType } from '../theme/interface';

export const varCreator = (token: TokensType) => {
  return {
    overlay_z_index: 10,
    overlay_background_color: token['--smegma-1'],
  };
};
