'use client';

import { Wrapper } from './styles';
import { ReactNode } from 'react';

interface Props {
  id: string;
  children: ReactNode;
}

export const Section: React.FC<Props> = ({ id, children }) => {
  return <Wrapper id={id}>{children}</Wrapper>;
};
