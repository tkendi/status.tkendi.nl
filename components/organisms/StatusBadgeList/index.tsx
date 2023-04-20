import React, { useCallback, useEffect, useState } from 'react';

import { getFinanceHealth } from '@/api/finance';
import StatusBadge from '@/components/molecules/StatusBadge';

import { Wrap } from './styles/index.style';

const StatusBadgeList = () => {
  const [healthData, setHealthData] = useState<healthDataState>({});

  const handleGeteHealthData = useCallback(async () => {
    const { status } = await getFinanceHealth();
    setHealthData({ finance: status });
  }, []);

  useEffect(() => {
    handleGeteHealthData();
  }, []);

  return (
    <Wrap>
      {Object.entries(healthData)?.map(([key, value], index) => {
        return (
          <StatusBadge key={`${key}-${index}`} title={key} status={value} />
        );
      })}
    </Wrap>
  );
};

export default StatusBadgeList;
