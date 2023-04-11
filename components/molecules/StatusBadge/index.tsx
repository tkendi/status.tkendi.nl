import React from 'react';

import { styled } from '@/styles/stitches.config';

const StatusBadge = () => {
  return <Wrap>StatusBadge</Wrap>;
};

export default StatusBadge;

const Wrap = styled('div', {
  width: '100%',
  height: '45px',
  display: 'inline-grid',
  alignItems: 'center',
  borderRadius: '7px',
  border: '1px solid #eeeeee',
  backgroundColor: '#fff',
});
