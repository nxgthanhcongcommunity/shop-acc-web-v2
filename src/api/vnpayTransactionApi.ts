import { HTTP_METHODS } from "../constants";
import axiosInstance from "./axiosInstance";
import { transformResponse } from "./utils";

const vnpayTransactionApi = {
  async CreatePaymentUrl(data: any) {
    const response = await axiosInstance({
      method: HTTP_METHODS.POST,
      url: "vnpay-transaction/create-payment-url",
      data,
    });

    return transformResponse(response);
  },
  async GetReturnResult(data: any) {
    const response = await axiosInstance({
      method: HTTP_METHODS.POST,
      url: "vnpay-transaction/get-return-result",
      data,
    });

    return transformResponse(response);
  },
};

export default vnpayTransactionApi;
