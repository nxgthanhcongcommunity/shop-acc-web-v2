import axiosInstance from "./axiosInstance";
import { transformResponse } from "./utils";

const accountApi = {
  async LoginWithGoogle(data: any) {
    const response = await axiosInstance({
      method: "POST",
      url: "auth/google",
      data: { ...data },
    });

    return response;
  },

  async GetAccountBalanceByCode(data: any) {
    const response = await axiosInstance({
      method: "GET",
      url: "account/get-account-balance-by-code",
      params: data,
    });

    return transformResponse(response);
  },

  async MarkNotificationsRead(data: any) {
    const response = await axiosInstance({
      method: "GET",
      url: "account/mark-notifications-read",
      params: data,
    });

    return transformResponse(response);
  },

  async GetNotifications(data: any) {
    const response = await axiosInstance({
      method: "GET",
      url: "account/get-notifications",
      params: data,
    });

    return transformResponse(response);
  },
};

export default accountApi;
