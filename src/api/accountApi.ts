import { HTTP_METHODS } from "../constants";
import axiosInstance from "./axiosInstance";
import { fetchApiAsync } from "./utils";

const accountApi = {

  MarkNotificationsRead: async (data: any) => await fetchApiAsync(
    async () => await axiosInstance({
      method: HTTP_METHODS.POST,
      url: "account/mark-notifications-read",
      data,
    })
  ),

  GetNotifications: async (data: any) => await fetchApiAsync(
    async () => await axiosInstance({
      method: HTTP_METHODS.GET,
      url: "account/get-notifications",
      params: data,
    })
  ),

};

export default accountApi;
