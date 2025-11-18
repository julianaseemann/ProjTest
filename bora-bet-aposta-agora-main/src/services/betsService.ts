import api from "./api";

export const getMyBets = async (userId: number) => {
  const res = await api.get(`/bets/user/${userId}`);
  return res.data;
};

export const createBet = async (bet: any) => {
  const res = await api.post("/bets", bet);
  return res.data;
};
