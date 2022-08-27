import config from "./config.json";
import { http } from "./httpSevice";

export const loginUser = (phone) => {
  return http.post(`${config.toplearnapi}/login`, JSON.stringify({phone}));
};
