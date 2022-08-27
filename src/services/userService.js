import config from "./config.json";
import { http } from "./httpSevice";

export const loginUser = (user) => {
  return http.post(`${config.toplearnapi}/api/login`, JSON.stringify(user));
};
