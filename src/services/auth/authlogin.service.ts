import axios from "@/src/utils/axios";
import { AUTH_LOGIN_URL } from "@/src/constants/server.url";
import { IResponseTokens } from "@/src/types/auth/IResponseTokens";
import { INetwortRequestResponseState } from "@/src/types/INetworkRequestResponseState";

export interface ILoginResponse extends INetwortRequestResponseState {
  data?: IResponseTokens;
}

export const LoginService = async (email: string, password: string) => {
  try {
    let response = await axios.post(
        AUTH_LOGIN_URL,
      {
        email,
        password,
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
