import httpSevice from "./httpSevice";

import config from "./config.json";

export const registerUser = (user) => {
  return httpSevice.post(
    `${config.toplearnapi}/api/register`,
    JSON.stringify(user)
  );
};

export const loginUser = (user) => {
  return httpSevice.post(
    `${config.toplearnapi}/api/login`,
    JSON.stringify(user)
  );
};
