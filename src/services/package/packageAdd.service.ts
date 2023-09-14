import axios from "@/src/utils/axios";
import { PACKAGE_CREATE_URL } from "@/src/constants/server.url";
import { INetwortRequestResponseState } from "@/src/types/INetworkRequestResponseState";

export const PackageAddService = async ( type:string, amount:string, description:string ) => {
  try {
    let response = await axios.post( PACKAGE_CREATE_URL,{
      type,
      amount,
      description,
    } );
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