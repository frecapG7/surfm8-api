import { useMutation } from "@tanstack/vue-query";
import http from "./axios.js";
const verifyUsernameUnicity = async (username) => {
  const response = await http.get(`/users/verify/${username}`);
  return response.data;
};

export const useVerifyUsernameUnicity = () => {
  return useMutation({
    mutationFn: verifyUsernameUnicity,
  });
};
