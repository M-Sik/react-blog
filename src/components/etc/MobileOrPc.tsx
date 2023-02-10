import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const Mobile = ({ children }: { children: JSX.Element }) => {
  const isMobile = useMediaQuery({
    query: '(max-width:799px)',
  });
  return <>{isMobile && children}</>;
};

export const Pc = ({ children }: { children: JSX.Element }) => {
  const isPc = useMediaQuery({
    query: '(min-width:800px)',
  });
  return <>{isPc && children}</>;
};
