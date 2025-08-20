// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStrObj = (str: string): any => {
  let obj;
  if (!str) return obj;

  try {
    obj = JSON.parse(str);
  } catch (_err) {
    // console.log('_err==', _err);
  }

  return obj;
};

export const isSvgXml = (str: string): boolean => {
  const isSvgXmlReg = /^<(\?xml|svg)/i;

  return isSvgXmlReg.test(str);
};
