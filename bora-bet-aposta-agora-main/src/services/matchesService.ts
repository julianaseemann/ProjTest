import api from "./api";

export const getAllMatches = async () => {
  const res = await api.get("/matches");
  return res.data;
};
