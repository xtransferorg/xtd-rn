import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { ActionSheetOptions } from '../../core/action-sheet/interface';
import { UploadFileTypes, UploadListTypes, UploadWays } from './enum';
import React from 'react';
import { PhotoQuality } from 'react-native-image-picker';

interface TipProps {
  /**
   * 上传提示
   */
  tip?: React.ReactNode;
  /**
   * 上传提示样式
   */
  tipStyle?: StyleProp<TextStyle>;
  /**
   * 上传提示图标
   */
  tipIcon?: React.ReactElement;
  /**
   * 上传副提示
   * listType={Uploader.UploadListTypes.Text}时有效
   */
  subTip?: React.ReactNode;
  /**
   * 上传副提示样式
   * listType={Uploader.UploadListTypes.Text}时有效
   */
  subTipStyle?: StyleProp<TextStyle>;
}

export interface UploaderTitleProps {
  /**
   * 是否必填 默认false 显示“（选填）”
   * @default false
   */
  required?: boolean;

  /**
   * 标题容器外层样式 标题&选填
   */
  titleContainerStyle?: StyleProp<ViewStyle>;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 标题样式包含（选填）
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * 是否展示右侧的questionIcon
   * @default false
   */
  showIcon?: boolean;
  /**
   * 点击icon的回调
   */
  onClickIcon?: () => void;

  /**
   * 点击示例的回调,有回调就会展示示例按钮
   */
  onShowDemo?: () => void;
}

export interface UploaderBodyProps extends TipProps {
  /**
   * 上传文件的类型， 图片、证件等
   * @default 'image'
   */
  attachmentType?: 'image' | 'credentials';
  /**
   * 自定义上传按钮
   */
  renderUploaderBtn?: React.ReactNode;
  /**
   * 是否禁止操作
   * @default true
   */
  disabled?: boolean;
  /**
   * 删除按钮的icon图标
   */
  deleteIcon?: React.ReactNode;
  /**
   * 上传图片下方的提示信息
   */
  description?: React.ReactNode;
  /**
   * 最多上传几张图片， 超过不展示上传按钮，默认最多展示999张
   * @default 999
   */
  maxCount?: number;
  /**
   * 是否展示上传按钮
   * @default true
   */
  showUploadBtn?: boolean;
  /**
   * 默认已上传的文件列表
   */
  defaultValue?: ImageInfo[];
  /**
   * 已上传的文件列表
   */
  value?: ImageInfo[];
  /**
   * 内容变更时触发的回调
   */
  onChange?: (files: ImageInfo[]) => void;
  /**
   * 预览文件的回调
   */
  onPreviewFile?: (uri: string) => void;

  children?: React.ReactNode;

  /**
   * 支持上传的类型，比如Image、Pdf等
   */
  uploadFileType?: UploadFileTypes[];

  /**
   * 是否使用容器的宽度来计算图片的宽度，
   * 直接使用Uploader默认开启true，方便直接使用
   * 自定义使用UploaderBody默认为false（Uploader中自定义多UploaderBody并存不能开启，自定义一个UploaderBody可手动开启）
   */
  useContainerWidth?: boolean;

  /**
   * 外层容器的空白间距 相对手机屏幕
   * 处理布局显示不全问题，主要解决多个UploaderBody的情况，单个UploaderBody可直接启用useContainerWidth
   * 例如外层页面设置padding: 10, 空白距离为左右空白相加： 10 + 10 = 20 默认是该值
   * @default 20
   */
  containerSpacing?: number;

  /**
   * 上传浮层的配置
   */
  actionSheetProps?: Omit<ActionSheetOptions, 'actions'>;

  /**
   * 容器样式
   */
  containerStyle?: ViewStyle;

  /**
   * 相机、图片、文件容器关闭事件
   */
  onActionContainerClose?: () => void;
  /**
   * 内容的样式 主要自定义设置宽高 满足特殊场景需求
   */
  contentStyle?: ViewStyle;
  /**
   * 点击上传按钮时候回调，业务自定义上传操作时候使用， 默认组件内部处理
   */
  onUpload?: () => void;

  /**
   * 不可操作点击回调
   */
  onDisabledPress?: (value?: ImageInfo[]) => void;
  /**
   * 图片质量, 数值越大，图片质量越好
   * 可设置值：0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1
   * @default 1
   */
  imgQuality?: PhotoQuality;

  /**
   * 上传列表的内建样式
   * @default UploadListTypes.PictureCard
   */
  listType?: UploadListTypes;
  /**
   * 点击下载文件时的回调
   * @param file 下载文件信息
   */
  onDownload?: (file: ImageInfo) => void;
  /**
   * 点击移除文件时的回调，返回值为 false 时不移除。
   * 同时支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除
   * @param file 删除文件信息
   * @param index 删除文件索引
   * @returns boolean | Promise<boolean | ImageInfo>
   */
  onRemove?: (
    file: ImageInfo,
    index: number
  ) => boolean | Promise<boolean | ImageInfo>;
  /**
   * 实际上传前调用的，返回值为 false 不上传
   * 同时支持 Promise 对象 resolve(false) 或 reject 时不进行添加上传，
   * 当需要对上传文件属性进行修改，promise直接resolve或直接return新的newFiles文件数组作为上传添加文件
   * @param newFiles 即将上传的文件列表
   * @returns boolean | Promise<boolean | ImageInfo[]>;
   */
  beforeUpload?: (
    newFiles: ImageInfo[]
  ) => boolean | ImageInfo[] | Promise<boolean | ImageInfo[]>;
  /**
   * 实际上传操作
   * @param newFiles 上传的文件列表
   * @returns  Promise<any>
   */
  doUpload?: (newFiles: ImageInfo[]) => Promise<any>;
  /**
   * 上传成功回调
   * @param newFiles 新增上传文件列表
   * @param allFiles 当前所有文件
   * @param response 接口响应结果
   */
  onSuccess?: (
    newFiles: ImageInfo[],
    allFiles: ImageInfo[],
    response: any
  ) => void;
  /**
   * 上传失败回调, 返回true时重新上传
   * 同时支持 Promise 对象 resolve(true) 进行重新上传
   * @param newFiles 上传文件列表
   * @param err 失败原因
   * @returns boolean | Promise<boolean>
   */
  onError?: (newFiles: ImageInfo[], err: any) => boolean | Promise<boolean>;
  /**
   * 上传失败提示, 若无需错误提示则赋值为空字符串('')即可
   * @default '上传出错，请重新上传' 默认适配多语言
   */
  errorTip?: string;
  /**
   * 文件体积最大值(B)
   */
  maxSize?: number;
  /**
   * 文件体积最小值(B)
   */
  minSize?: number;
  /**
   * 超过文件体积最大值错误提示, 若无需错误提示则赋值为空字符串('')即可
   * @default '文件过大，请重新上传 ' 默认适配多语言
   */
  maxSizeErrorTip?: string;
  /**
   *  小于文件体积最小值错误提示,若无需错误提示则赋值为空字符串('')即可
   * @default '文件过小，请重新上传 ' 默认适配多语言
   */
  minSizeErrorTip?: string;
  /**
   * 状态
   * 目前主要就是错误状态 error
   */
  status?: 'error';
}

export type UploaderScreenProps = UploaderTitleProps &
  UploaderBodyProps & {
    /**
     * 容器样式
     */
    style?: ViewStyle;
  };
export interface PreviewProps {
  visible: boolean;
  onRequestClose?: (() => void) | undefined;
  index?: number;
  imageUrls: string[];
  onSwipeDown?: (() => void) | undefined;
  onClick?:
    | ((
        close?: (() => any) | undefined,
        currentShowIndex?: number | undefined
      ) => void)
    | undefined;
}

export interface UploadBtnProps extends TipProps {
  /**
   * 自定义上传按钮
   */
  renderBtn?: React.ReactNode;

  style?: ViewStyle;

  /**
   * 点击按钮的回调
   */
  onPress?: () => void;

  /**
   * 内容的样式 主要设置宽高
   */
  contentStyle?: ViewStyle;

  /**
   * 是否是证件类型
   * @defaul false
   */
  isCredentials?: boolean;
  /**
   * 是否不可操作
   */
  disabled?: boolean;
  /**
   * 不可操作点击回调
   */
  onDisabledPress?: () => void;

  /**
   * 上传列表的内建样式
   * @default UploadListTypes.PictureCard
   */
  listType?: UploadListTypes;
  /**
   * 状态
   * 目前主要就是错误状态 error
   */
  status?: 'error';
}

/**
 * 历史原因取名ImageInfo 实际含义是FileInfo
 */
export interface ImageInfo {
  /**
   * 文件资源路径
   */
  uri: string;
  /**
   * 文件名
   */
  fileName?: string;
  /**
   * 文件大小
   */
  fileSize?: number;
  /**
   * 文件为图片时 高度
   */
  height?: number;
  /**
   * 文件为图片时 宽度
   */
  width?: number;
  /**
   * 文件类型
   */
  type?: string;
  /**
   * 文件状态
   * isUploading 上传中
   * done 上传完成
   */
  status?: undefined | 'isUploading' | 'done';
  /**
   * 是否隐藏删除按钮？
   */
  hideDeleteIcon?: boolean;
  /**
   *  上传文件名（业务添加使用）
   */
  attachmentName?: string;
  /**
   *  上传文件的类型（业务添加使用）
   */
  attachmentType?: string;
  /**
   * 是否隐藏下载按钮？
   */
  hideDownloadIcon?: boolean;
  /**
   * 选择上传文件的唯一ID(_表示内部，避免和业务现有字段冲突)
   */
  _fileId?: string;
  /**
   * 文件其他属性
   */
  [key: string]: any;
}

export { UploadFileTypes } from './enum';

export interface UploaderRef {
  upload: () => void;
  choose: (way: UploadWays) => void;
  remove: (index: number) => void;
}

export interface TextListProps {
  /**
   * 文件信息
   */
  files?: ImageInfo[];
  /**
   * 点击下载文件时的回调
   * @param file 下载文件信息
   */
  onDownload?: (file: ImageInfo) => void;
  /**
   * 点击移除文件时的回调
   * @param index 删除文件索引
   */
  onRemove?: (index: number) => void;
  /**
   * 预览文件的回调
   */
  onPreviewFile?: (uri: string) => void;
}
