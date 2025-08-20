import { IndexBarBaseData, IndexBarGroupItem } from './interface';

interface SectionHeader {
  type: 'SECTION_HEADER';
}

interface Row {
  type: 'ROW';
  index: number;
}

interface SectionFooter {
  type: 'SECTION_FOOTER';
}

type ListElement = SectionHeader | Row | SectionFooter;

export interface Parameters<T = IndexBarBaseData> {
  getItemHeight: (rowData: T, sectionIndex: number, rowIndex: number) => number;
  getSeparatorHeight?: (sectionIndex: number, rowIndex: number) => number;
  getSectionHeaderHeight?: (sectionIndex: number) => number;
  getSectionFooterHeight?: (sectionIndex: number) => number;
  listHeaderHeight?: number | (() => number);
}

export default ({
    getItemHeight,
    getSeparatorHeight = () => 0,
    getSectionHeaderHeight = () => 0,
    getSectionFooterHeight = () => 0,
    listHeaderHeight = 0,
  }: Parameters) =>
  (data: IndexBarGroupItem<IndexBarBaseData>[] | null, index: number) => {
    let i = 0;
    let sectionIndex = 0;
    let elementPointer: ListElement = { type: 'SECTION_HEADER' };
    let offset =
      typeof listHeaderHeight === 'function'
        ? listHeaderHeight()
        : listHeaderHeight;

    while (i < index) {
      switch (elementPointer.type) {
        case 'SECTION_HEADER': {
          const sectionData = data?.[sectionIndex]?.data;

          offset += getSectionHeaderHeight(sectionIndex);

          // 如果当前section的item为空，转向计算sectionFooter的高度
          if (sectionData?.length === 0) {
            elementPointer = { type: 'SECTION_FOOTER' };
          } else {
            // 如果当前section的item不为空，从计算当前section的第一个item开始计算高度
            elementPointer = { type: 'ROW', index: 0 };
          }

          break;
        }
        case 'ROW': {
          const sectionData = data?.[sectionIndex]?.data;

          const rowIndex = elementPointer.index;

          offset += getItemHeight(
            sectionData?.[rowIndex] as IndexBarBaseData,
            sectionIndex,
            rowIndex
          );
          elementPointer.index += 1;

          if (sectionData && rowIndex === sectionData?.length - 1) {
            elementPointer = { type: 'SECTION_FOOTER' };
          } else {
            offset += getSeparatorHeight(sectionIndex, rowIndex);
          }

          break;
        }
        case 'SECTION_FOOTER': {
          offset += getSectionFooterHeight(sectionIndex);
          sectionIndex += 1;
          elementPointer = { type: 'SECTION_HEADER' };
          break;
        }
      }

      i += 1;
    }

    let length;
    switch (elementPointer.type) {
      case 'SECTION_HEADER':
        length = getSectionHeaderHeight(sectionIndex);
        break;
      case 'ROW': {
        const rowIndex = elementPointer.index;
        length = getItemHeight(
          data?.[sectionIndex]?.data[rowIndex] as IndexBarBaseData,
          sectionIndex,
          rowIndex
        );
        break;
      }
      case 'SECTION_FOOTER':
        length = getSectionFooterHeight(sectionIndex);
        break;
      default:
        throw new Error('Unknown elementPointer.type');
    }

    return { length, offset, index };
  };
