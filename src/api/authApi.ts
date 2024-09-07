import { HTTP_METHODS } from "../constants";
import axiosInstance from "./axiosInstance";
import { fetchApiAsync } from "./utils";

const authApi = {
  LoginWithGoogle: async (data: any) =>
    await fetchApiAsync(
      async () =>
        await axiosInstance({
          method: HTTP_METHODS.POST,
          url: "auth/google",
          data,
        })
    ),

  RefreshToken: async (data: any) =>
    await fetchApiAsync(
      async () =>
        await axiosInstance({
          method: HTTP_METHODS.POST,
          url: "auth/refresh",
          data,
        })
    ),
};

export default authApi;
