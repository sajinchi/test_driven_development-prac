import axios from "@/src/utils/axios";
import { ILoginResponse } from "./authlogin.service";
import { AUTH_REFRESH_URL } from "@/src/constants/server.url";

export const RefreshService = async (refresh: string) => {
  try {
    const response = await axios.post(
      AUTH_REFRESH_URL,
      {
        refresh,
      }
    );
    let result: ILoginResponse = {
      status: response.status,
      message: response.statusText,
      data: response.data,
    };
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result: ILoginResponse = {
        status: error.response!.status,
        message: error.response!.data.detail,
      };
      return result;
    } else {
      const result: ILoginResponse = {
        status: 400,
        message: "Unknown Error",
      };
      return result;
    }
  }
};
