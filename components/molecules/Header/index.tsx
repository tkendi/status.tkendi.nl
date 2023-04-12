import React from 'react';
import { Dosis } from 'next/font/google';

import { styled } from '@/styles/stitches.config';
import { Text } from '@/components/atoms/Text';

import Search from '../Search';

const dosis = Dosis({
  subsets: ['latin'],
  variable: '--dosis-font',
});

const Header = () => {
  return (
    <Wrap>
      <LogoBox>
        <LogoText className={dosis.variable}>T</LogoText>
      </LogoBox>
      <Search />
    </Wrap>
  );
};

export default Header;

const Wrap = styled('div', {
  width: 'calc(100% - 30px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '15px',
  backgroundColor: '#fefefe',

  '@sm': {},
});

const LogoBox = styled('div', {
  width: '38px',
  height: '38px',
  padding: '10px',
});

const LogoText = styled(Text, {
  fontFamily: 'var(--dosis-font)',
  fontSize: '34px',
  fontWeight: 600,
  lineHeight: '40px',
  textAlign: 'center',
});
