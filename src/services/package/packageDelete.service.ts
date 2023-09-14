import axios from "@/src/utils/axios";
import { PACKAGE_DELETE_URL } from "@/src/constants/server.url";
import { INetwortRequestResponseState } from "@/src/types/INetworkRequestResponseState";

export const DeletePackageService = async (id:string) => {
  try {
    let response = await axios.delete( PACKAGE_DELETE_URL + id +'/' );
    let result: INetwortRequestResponseState = {
        status: response.status,
        message: response.statusText,
    };
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result: INetwortRequestResponseState = {
        status: error.response!.status,
        message: error.response!.data.detail,
      };
      return result;
    } else {
      const result: INetwortRequestResponseState = {
        status: 400,
        message: "Unknown Error",
      };
      return result;
    }
  }
};
