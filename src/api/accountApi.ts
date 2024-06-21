import { HTTP_METHODS } from "../constants";
import axiosInstance from "./axiosInstance";
import { fetchApiAsync } from "./utils";

interface IGetAccountByCodeReq {
  accountCode: string
}

interface IMarkNotificationsRead {
  code?: string
  accountCode?: string
}

interface IGetNotificationsReq {
  accountCode: string
}

const accountApi = {

  MarkNotificationsRead: async (data: IMarkNotificationsRead) => await fetchApiAsync(
    async () => await axiosInstance({
      method: HTTP_METHODS.POST,
      url: "account/mark-notifications-read",
      data,
    })
  ),

  GetNotifications: async (data: IGetNotificationsReq) => await fetchApiAsync(
    async () => await axiosInstance({
      method: HTTP_METHODS.GET,
      url: "account/get-notifications",
      params: data,
    })
  ),

  GetAccountByCode: async (data: IGetAccountByCodeReq) => await fetchApiAsync(
    async () => await axiosInstance({
      method: HTTP_METHODS.GET,
      url: "account/get-account-by-code",
      params: data,
    })
  ),

};

export default accountApi;
