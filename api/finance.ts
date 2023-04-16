import axios from 'axios';

export const getFinanceHealth = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_FINANCE_API}`);
};
