import React from 'react';

import { Container } from '@/components/atoms/Container';
import StatusBadgeList from '@/components/organisms/StatusBadgeList';

const HomeTemplate = () => {
  return (
    <Container>
      <div style={{ border: '1px solid #fff' }}>
        Tkendi Status
        <StatusBadgeList />
      </div>
    </Container>
  );
};

export default HomeTemplate;
