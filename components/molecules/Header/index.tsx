import React from 'react';
import { Dosis } from 'next/font/google';

import { styled } from '@/styles/stitches.config';
import { Text } from '@/components/atoms/Text';

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
    </Wrap>
  );
};

export default Header;

const Wrap = styled('div', {
  width: '100%',
  padding: '15px',
  backgroundColor: '#fefefe',

  '@sm': {},
});

const LogoBox = styled('div', {
  width: '35px',
  height: '35px',
  padding: '10px',
});

const LogoText = styled(Text, {
  fontFamily: 'var(--dosis-font)',
  fontSize: '45px',
  fontWeight: 600,
  lineHeight: '40px',
  textAlign: 'center',
});
