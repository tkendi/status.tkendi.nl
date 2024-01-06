import React, { useCallback, useEffect, useState } from "react";

import { Wrap } from "./styles/index.style";

import { getFinanceHealth } from "@/api/finance";
import StatusBadge from "@/components/molecules/StatusBadge";
import { useFindAllDomainQuery } from "@/gql/generated";

const StatusBadgeList = () => {
  const { data } = useFindAllDomainQuery();
  const [healthData, setHealthData] = useState<healthDataState>({});

  const handleGeteHealthData = useCallback(async () => {
    const { status } = await getFinanceHealth();
    setHealthData({ financeApi: status });
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
