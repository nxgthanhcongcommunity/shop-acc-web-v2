import axiosInstance from "./axiosInstance";
import { transformResponse } from "./utils";

const invoiceApi = {
  async CreateInvoice(data: any) {
    const response = await axiosInstance({
      method: "POST",
      url: "invoice/create",
      data: data,
    });

    return transformResponse(response);
  },

  async GetInvoiceByCode(data: any) {
    const response = await axiosInstance({
      method: "GET",
      url: "invoice/get-invoice-by-code",
      params: data,
    });

    return transformResponse(response);
  },

};

export default invoiceApi;
