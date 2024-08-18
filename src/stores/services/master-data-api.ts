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
    getCategoriesByBannerCode: build.query<any[], string>({
      query: (code) =>
        `category/get-categories-by-banner-code?bannerCode=${code}`,
      transformResponse,
    }),

    getCategoryByCode: build.query<any, string>({
      query: (code) => `category/get-category-by-code?categoryCode=${code}`,
      transformResponse,
    }),

    getProductByCode: build.query<any, string>({
      query: (code) => `product/get-product-by-code?code=${code}`,
      transformResponse,
    }),

    getProductsByKeys: build.query({
      query: (params) =>
        `product/get-products-by-keys?${new URLSearchParams(params).toString()}`,
      transformResponse,
    }),
  }),
});

export const {
  useGetCategoriesByBannerCodeQuery,
  useGetCategoryByCodeQuery,
  useGetProductByCodeQuery,
  useGetProductsByKeysQuery,
} = api;
export default api;
