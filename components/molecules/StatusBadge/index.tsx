import React from 'react';

import { styled } from '@/styles/stitches.config';
import { Text } from '@/components/atoms/Text';

const StatusBadge = ({ title, status }: StatusBadgeProps) => {
  return (
    <Wrap>
      <Text> {title}</Text>
      <Text>{status}</Text>
    </Wrap>
  );
};

export default StatusBadge;

const Wrap = styled('div', {
  width: '100%',
  height: '45px',
  display: 'inline-grid',
  alignItems: 'center',
  padding: '10px 15px',
  borderRadius: '7px',
  border: '1px solid #eeeeee',
  backgroundColor: '#fff',
});
