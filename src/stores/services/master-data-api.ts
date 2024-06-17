import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./base-query";

const transformResponse = (response: any) => {
  if (!response.succeed) {
    throw new Error("zz");
  }
  return response.data;
};

const api = createApi({
  baseQuery,
  endpoints: (build) => ({
    getCategoriesByBannerCode: build.query<any, string>({
      query: (code) => `category/get-categories-by-banner-code?code=${code}`,
      transformResponse,
    }),
  }),
});

export const { useGetCategoriesByBannerCodeQuery } = api;
export default api;
