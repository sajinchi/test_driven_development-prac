import axios from "@/src/utils/axios";
import { IProduct } from "@/src/types/product/IProduct";
import { USER_GETSINGLE_URL } from "@/src/constants/server.url";
import { INetwortRequestResponseState } from "@/src/types/INetworkRequestResponseState";
import { IUser } from "@/src/types/user/IUser";


export interface SingleUserGetResponse extends INetwortRequestResponseState {
  data?: IUser;
}

export const GetUserSingleService = async (id:string) => {
  try {
    let response = await axios.get( USER_GETSINGLE_URL + id + '/' );
    console.log(response);
    let result: SingleUserGetResponse = {
        status: response.status,
        message: response.statusText,
        data: response.data,
    };
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result: SingleUserGetResponse = {
        status: error.response!.status,
        message: error.response!.data.detail,
      };
      return result;
    } else {
      const result: SingleUserGetResponse = {
        status: 400,
        message: "Unknown Error",
      };
      return result;
    }
  }
};
