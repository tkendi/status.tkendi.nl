import React from 'react';

import { LayoutStyled } from './styled';
import Header from '../Header';
import { LayoutProps } from './type';

const Layout = ({
  children,
  isHeaderShow = true,
}: React.PropsWithChildren<LayoutProps>) => {
  return (
    <LayoutStyled>
      {isHeaderShow && <Header />}
      {children}
    </LayoutStyled>
  );
};

export default Layout;
