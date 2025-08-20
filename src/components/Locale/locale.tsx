import React, { useMemo, useContext, createContext, memo } from 'react';
import { en_US, es_ES, zh_CN, zh_HK } from './lang';
import type { LocaleProviderProps, Locale } from './interface';
import { LangType } from './enum';
import defaultLocale from './lang/zh_CN';

const LocaleContext = createContext(defaultLocale);
const LangContext = createContext(LangType.zh_CN);

export const useLocale = () => useContext(LocaleContext);
export const useLangType = () => useContext(LangContext);

export const getLocale = (langType: LangType) => {
  switch (langType) {
    case LangType.en_US:
      return en_US;
    case LangType.zh_HK:
      return zh_HK;
    case LangType.zh_CN:
      return zh_CN;
    case LangType.es_ES:
      return es_ES;
    default:
      return zh_CN;
  }
};

const LocaleProvider: React.FC<LocaleProviderProps> = ({
  children,
  langType = LangType.zh_CN,
}) => {
  const state = useMemo<Locale>(
    () => ({
      ...defaultLocale,
      ...getLocale(langType),
    }),
    [langType]
  );

  return (
    <LocaleContext.Provider value={state}>
      <LangContext.Provider value={langType}>{children}</LangContext.Provider>
    </LocaleContext.Provider>
  );
};

export default memo(LocaleProvider);
