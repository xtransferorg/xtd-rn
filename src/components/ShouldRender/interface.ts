import { ReactNode } from 'react';

export interface ShouldRenderProps {
  condition: boolean;
  children: ReactNode;
}
