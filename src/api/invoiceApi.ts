import { HTTP_METHODS } from "../constants";
import axiosInstance from "./axiosInstance";
import { fetchApiAsync } from "./utils";

interface IGetPurchaseHistoryAsyncReq {
  accountCode: string;
}

const invoiceApi = {

  CreateInvoice: async (data: any) => await fetchApiAsync(
    async () => await axiosInstance({
      method: HTTP_METHODS.POST,
      url: "invoice/create",
      data: data,
    })
  ),

  GetInvoiceByCode: async (data: any) => await fetchApiAsync(
    async () => await axiosInstance({
      method: HTTP_METHODS.GET,
      url: "invoice/get-invoice-by-code",
      params: data,
    })
  ),

  GetPurchaseHistoryAsync: async (data: IGetPurchaseHistoryAsyncReq) => await fetchApiAsync(
    async () => await axiosInstance({
      method: HTTP_METHODS.GET,
      url: "invoice/get-purchase-history",
      params: data,
    })
  )
};

export default invoiceApi;
