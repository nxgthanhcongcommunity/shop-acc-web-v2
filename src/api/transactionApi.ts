import { HTTP_METHODS } from "../constants";
import axiosInstance from "./axiosInstance";
import { fetchApiAsync } from "./utils";

interface IGetTransactionHistoryReq {
  accountCode: string;
}

const transactionApi = {

  GetTransactionHistory: async (data: IGetTransactionHistoryReq) => await fetchApiAsync(
    async () => await axiosInstance({
      method: HTTP_METHODS.GET,
      url: "transaction/get-transaction-history",
      params: data,
    })
  ),

};

export default transactionApi;
