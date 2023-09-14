
import axios from "@/src/utils/axios";
import { USER_ME_GET_URL } from "@/src/constants/server.url";
import { INetwortRequestResponseState } from "@/src/types/INetworkRequestResponseState";
import { IUser } from "@/src/types/user/IUser";

export interface IUserSelfDataResponse extends INetwortRequestResponseState {
  data? : IUser;
}
export const UserMeService = async () => {
  try {
    let response = await axios.get(USER_ME_GET_URL);
    console.log(response);
    let result: IUserSelfDataResponse = {
      status: response.status,
      message: response.statusText,
      data: response.data,
    };
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        const result:IUserSelfDataResponse = {
            status: error.response!.status,
            message: error.response!.data.detail,
        };
        return result;    
    }else {
        const result:IUserSelfDataResponse = {
            status: 400,
            message: 'Unknown Error',
        };
        return result;
    }
  }
};