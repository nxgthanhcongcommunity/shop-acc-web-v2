import axiosInstance from "./axiosInstance";
import { transformResponse } from "./utils";

const authApi = {
  async LoginWithGoogle(data: any) {
    const response = await axiosInstance({
      method: "POST",
      url: "auth/google",
      data: { ...data },
    });

    return transformResponse(response);
  },
};

export default authApi;
