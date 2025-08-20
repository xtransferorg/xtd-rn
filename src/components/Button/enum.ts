export enum Size {
  mini = 'mini',
  small = 'small',
  middle = 'middle',
  large = 'large',
}

/**
 * 按钮填充样式，为了向下兼容，不再修改为 type
 */
export enum Fill {
  /**
   * 实心填充
   */
  solid = 'solid',

  /**
   * 轮廓填充
   * @deprecated 已经废弃，不再支持
   */
  outline = 'outline',

  /**
   * 虚线填充
   */
  dashed = 'dashed',

  /**
   * 极弱类型
   */
  weak = 'weak',

  /**
   * 危险类型
   */
  danger = 'danger',

  /**
   * 文本类型
   */
  text = 'text',

  /**
   * 文字链类型
   */
  link = 'link',
}

export enum TextType {
  default = 'default',
  primary = 'primary',
  danger = 'danger',
}

export enum Shape {
  rounded = 'rounded',
  rectangular = 'rectangular',
}

export enum DisabledType {
  unactive = 'unactive',
  fail = 'fail',
}

export enum IconPosition {
  left = 'left',
  right = 'right',
}
