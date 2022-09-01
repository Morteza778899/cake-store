import config from "./config.json";
import { http } from "./httpSevice";

export const loginUser = (phone) => {
  return http.post(`${config.toplearnapi}/login`, JSON.stringify({phone}));
};

export const getAllUser = () => {
  return http.get(`${config.toplearnapi}/dashboard/get-users`);
};

export const buyCourseService = (id,phone) => {
  return http.post(`${config.toplearnapi}/dashboard/buy-course/${id}`, JSON.stringify({phone}));
};