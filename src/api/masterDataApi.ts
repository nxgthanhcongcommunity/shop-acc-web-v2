
import { HTTP_METHODS } from "../constants";
import axiosInstance from "./axiosInstance";
import { fetchApiAsync } from "./utils";

const masterDataApi = {

    GetByKey: async (queryConfig: any) => await fetchApiAsync(
        async () => await axiosInstance({
            method: HTTP_METHODS.GET,
            url: "master-data/get-by-key",
            params: queryConfig,
        })
    )

}

export default masterDataApi;