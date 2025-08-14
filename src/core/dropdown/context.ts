import { useContext, createContext } from 'react';

import type { DropdownContext, DropdownItemContext } from './interface';

export const DropdownConfig = createContext<DropdownContext>(
  {} as DropdownContext
);

export const useDropdownConfig = () => useContext(DropdownConfig);

// 创建DropdownItem Context
export const DropdownItemConfig = createContext<DropdownItemContext>(
  {} as DropdownItemContext
);

export const useDropdownItemConfig = () => useContext(DropdownItemConfig);
