import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query";
const { REACT_APP_API_URL } = process.env;

const staggeredBaseQuery = retry(
    fetchBaseQuery({ baseUrl: `${REACT_APP_API_URL}/api/v1/` }),
    {
        // maxRetries: 1,
    }
);

export default staggeredBaseQuery;