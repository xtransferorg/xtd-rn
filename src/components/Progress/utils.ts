export const isObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

export const validProgress = (progress?: number) => {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
};
