import { Collapse as _Collapse } from './Collapse';
import { CollapseItem } from './CollapseItem';

const Collapse = Object.assign(_Collapse, { Item: CollapseItem });
export default Collapse;
export { Collapse, CollapseItem };
export type { RNCollapseProps, RNCollapseItemProps } from './interface';
