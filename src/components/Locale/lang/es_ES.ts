import type { Locale } from '../interface';

const localeValues: Locale = {
  Loading: {
    loadingText: 'cargando...',
  },
  ButtonBar: {
    moreText: 'Más',
    labelActionSheetCancelText: 'Cancelar',
  },
  DatePickerRangeView: {
    confirmButtonText: 'Confirmar',
    resetButtonText: 'Restablecer',
    clearButtonText: 'Claro',
    placeholder: ['Por favor elija', 'Por favor elija'],
    labelStartTime: 'Hora de inicio',
    labelEndTime: 'Tiempo de finalización',
  },
  DatePickerSingleMethod: {
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
  },
  DatePickerView: {
    labelYear: 'año',
    labelMonth: 'mes',
    labelDay: 'día',
    labelHour: 'hora',
    labelMinute: 'minuto',
    labelSecond: 'segundo',
  },
  DescriptionDateRange: {
    split: 'Hasta',
  },
  Dialog: {
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
  },
  DropdownItem: {
    labelLoadingText: 'cargando...',
  },
  Empty: {
    text: 'Sin datos',
  },
  FieldSelector: {
    selectorTitle: 'Por favor elija',
  },
  Picker: {
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
  },
  ProgressPage: {
    failMessage: 'No se pudo cargar, intenta nuevamente más tarde',
    labelRefreshText: 'Refrescar',
  },
  Search: {
    searchText: 'Buscar',
  },
  Selector: {
    title: 'Por favor elija',
    confirmButtonText: 'Confirmar',
  },
  Sidebar: {
    labelLoading: 'cargando...',
    labelNoData: 'Sin datos',
  },
  StepSelector: {
    title: 'Por favor elija',
  },
  TextInput: {
    complete: 'Completo',
  },
  Uploader: {
    uploadText: 'Imagen',
    demo: 'Ejemplo',
    camera: 'Necesitas encender los permisos de la cámara',
    photoLibrary: 'Necesitas abrir los permisos del álbum',
    biometrics: 'Necesitas encender el permiso de FaceID',
    locked: 'Deberá volver a ingresar su contraseña de encendido',
    edit: 'Editar',
    preview: 'Avance',
    reupload: 'Subir de nuevo',
    delete: 'Eliminar',
    upload: 'Sube el archivo',
    error: 'Error de carga, por favor suba de nuevo',
    maxSizeError: 'El archivo es demasiado grande',
    minSizeError: 'El archivo es demasiado pequeño',
  },
  UploaderStyle: {
    cameraText: 'Tomar fotos',
    photoText: 'Elige entre álbum ',
    fileText: 'Elija archivo',
  },
  UploaderImage: {
    labelIng: 'Subiendo ...',
    labelFail: `Falló, intente de nuevo`,
  },
  PullToRefresh: {
    release: 'Lanzar para actualizar',
    refreshing: 'Refrescante...',
    pullToRefresh: 'Tirar hacia abajo para actualizar',
    finish: 'Renovado',
  },
  Collapse: {
    expand: 'Expandir',
    collapse: 'Colapsar',
  },
  OptionGroup: {
    resetButtonText: 'Reiniciar',
    confirmButtonText: 'Confirmar',
    allLabels: 'Filtros',
  },
  UnitInput: {
    // 百、千、万、十万、百万、千万、亿、十亿、百亿、千亿、万亿
    hundred: 'Centenar',
    thousand: 'Mil',
    tenThousand: 'Diez mil',
    hundredThousand: 'Cien mil',
    million: 'Millón',
    tenMillion: 'Diez millones',
    hundredMillion: 'Cien millones',
    billion: 'Mil millones',
    tenBillion: 'Diez mil millones',
    hundredBillion: 'Cien mil millones',
    trillion: 'Billón',
  },
  VirtualList: {
    footerText: 'Has llegado al final',
  },
  Calendar: {
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Puede',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    monthNamesShort: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'Puede',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    dayNames: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ],
    dayNamesShort: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    amDesignator: 'a.m.',
    pmDesignator: 'p.m.',
  },
  Select: {
    footerResetButtonText: 'restablecer',
    footerConfirmButtonText: 'confirmar',
    placeholder: 'Ingresar',
    empty: 'Sin datos',
  },
  AmountInput: {
    label: 'Venta de moneda y cantidad',
    placeholder: 'Ingresar',
    availableBalance: 'Balance disponible',
    error: 'Excediendo el saldo disponible',
    sellAll: 'Enviar todo',
    selectTitle: 'Moneda/saldo',
    selectPlaceholder: 'Seleccionar',
  },
  Field: {
    optional: '(Opcional)',
  },
  IndexBar: {
    listNoData: 'Sin datos',
  },
  Tour: {
    confirm: 'Confirmar',
    skip: 'Saltar',
  },
  QRCode: {
    cancelText: 'Cancelar',
    saveSuccessText: 'Guardado con éxito',
    saveText: 'Guardar como imagen',
  },
  FileViewer: {
    saveSuccessText: 'Guardado con éxito',
  },
  OcrPicture: {
    tapLight: 'Con flash',
    tapDown: 'Sin flash',
    album: 'Álbum',
    openCameraAuthority: 'Por favor, encienda la cámara para usar los permisos',
    noDevice: 'Error de cámara',
  },
  NoticeBar: {
    viewMore: 'Ver más',
    detail: 'Detalles',
  },
};

export default localeValues;
