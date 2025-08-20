import { isNil } from 'lodash';

export function fillSvg(xml: string, fill: string | undefined): string {
  let newXml = xml;
  if (!isNil(fill)) {
    newXml = newXml.replace(
      /(fill=")(#[a-fA-F0-9]{1,9})(")/g,
      `fill="${fill}"`
    );
  }
  return newXml;
}
