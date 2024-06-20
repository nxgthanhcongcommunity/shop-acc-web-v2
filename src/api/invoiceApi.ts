import { HTTP_METHODS } from "../constants";
import axiosInstance from "./axiosInstance";
import { fetchApiAsync } from "./utils";

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
  )

};

export default invoiceApi;
