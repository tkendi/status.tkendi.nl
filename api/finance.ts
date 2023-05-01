import { healthCheckAxios } from '.';

export const getFinanceHealth = () => {
  return healthCheckAxios.get(`${process.env.NEXT_PUBLIC_FINANCE_API}`);
};
