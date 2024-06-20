import { HTTP_METHODS } from "../constants";
import axiosInstance from "./axiosInstance";
import { fetchApiAsync } from "./utils";

const vnpayTransactionApi = {

  CreatePaymentUrl: async (data: any) => await fetchApiAsync(
    async () => await axiosInstance({
      method: HTTP_METHODS.POST,
      url: "vnpay-transaction/create-payment-url",
      data,
    })
  ),

  GetReturnResult: async (data: any) => await fetchApiAsync(
    async () => await axiosInstance({
      method: HTTP_METHODS.POST,
      url: "vnpay-transaction/get-return-result",
      data,
    })
  )

};

export default vnpayTransactionApi;
