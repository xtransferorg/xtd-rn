import type { PropsWithChildren } from 'react';
import { LangType } from './enum';

export interface Locale {
  Loading: {
    loadingText: string;
  };
  ButtonBar: {
    moreText: string;
    labelActionSheetCancelText: string;
  };
  DatePickerRangeView: {
    confirmButtonText: string;
    resetButtonText: string;
    clearButtonText: string;
    placeholder: [string, string];
    labelStartTime: string;
    labelEndTime: string;
  };
  DatePickerSingleMethod: {
    confirmButtonText: string;
    cancelButtonText: string;
  };
  DatePickerView: {
    labelYear: string;
    labelMonth: string;
    labelDay: string;
    labelHour: string;
    labelMinute: string;
    labelSecond: string;
  };
  DescriptionDateRange: {
    split: string;
  };
  Dialog: {
    confirmButtonText: string;
    cancelButtonText: string;
  };
  DropdownItem: {
    labelLoadingText: string;
  };
  Empty: {
    text: string;
  };
  FieldSelector: {
    selectorTitle: string;
  };
  Picker: {
    confirmButtonText: string;
    cancelButtonText: string;
  };
  ProgressPage: {
    failMessage: string;
    labelRefreshText: string;
  };
  Search: {
    searchText: string;
  };
  Selector: {
    title: string;
    confirmButtonText: string;
  };
  Sidebar: {
    labelLoading: string;
    labelNoData: string;
  };
  StepSelector: {
    title: string;
  };
  TextInput: {
    complete: string;
  };
  Uploader: {
    uploadText: string;
    demo: string;
    camera: string;
    photoLibrary: string;
    biometrics: string;
    locked: string;
    edit: string;
    preview: string;
    reupload: string;
    delete: string;
    upload: string;
    error: string;
    maxSizeError: string;
    minSizeError: string;
  };
  UploaderStyle: {
    cameraText: string;
    photoText: string;
    fileText: string;
  };
  UploaderImage: {
    labelIng: string;
    labelFail: string;
  };
  PullToRefresh: {
    release: string;
    refreshing: string;
    pullToRefresh: string;
    finish: string;
  };
  Collapse: {
    expand: string;
    collapse: string;
  };
  OptionGroup: {
    resetButtonText: string;
    confirmButtonText: string;
    allLabels: string;
  };
  UnitInput: {
    // 百、千、万、十万、百万、千万、亿、十亿、百亿、千亿、万亿
    hundred: string;
    thousand: string;
    tenThousand: string;
    hundredThousand: string;
    million: string;
    tenMillion: string;
    hundredMillion: string;
    billion: string;
    tenBillion: string;
    hundredBillion: string;
    trillion: string;
  };
  VirtualList: {
    footerText: string;
  };
  Calendar: {
    monthNames: string[];
    monthNamesShort: string[];
    dayNames: string[];
    dayNamesShort: string[];
    amDesignator: string;
    pmDesignator: string;
  };
  Select: {
    footerConfirmButtonText: string;
    footerResetButtonText: string;
    placeholder: string;
    empty: string;
  };
  AmountInput: {
    label: string;
    placeholder: string;
    availableBalance: string;
    error: string;
    sellAll: string;
    selectTitle: string;
    selectPlaceholder: string;
  };
  Field: {
    optional: string;
  };
  IndexBar: {
    listNoData: string;
  };
  Tour: {
    confirm: string;
    skip: string;
  };
  OcrPicture: {
    tapLight: string;
    tapDown: string;
    album: string;
    openCameraAuthority: string;
    noDevice: string;
  };
  QRCode: {
    cancelText: string;
    saveSuccessText: string;
    saveText: string;
  };
  FileViewer: {
    saveSuccessText: string;
  };
  NoticeBar: {
    viewMore: string;
    detail: string;
  };
}

export interface LocaleProviderProps extends PropsWithChildren<{}> {
  /**
   * 多语言配置
   */
  langType?: LangType;
}
