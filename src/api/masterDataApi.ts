
import axiosInstance from "./axiosInstance"
import { transformResponse } from "./utils";

const masterDataApi = {

    async GetByKey(queryConfig: any) {

        const response = await axiosInstance({
            method: "GET",
            url: "master-data/get-by-key",
            params: queryConfig,
        })

        return transformResponse(response);
    },
}

export default masterDataApi;