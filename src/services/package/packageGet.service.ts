import axios from "@/src/utils/axios";
import { PACKAGE_GET_URL } from "@/src/constants/server.url";
import { INetwortRequestResponseState } from "@/src/types/INetworkRequestResponseState";
import { IPackage } from "@/src/types/package/IPackage";

export interface PackageGetResponse extends INetwortRequestResponseState {
  data?: IPackage[];
}

export const PackageGetService = async () => {
  try {
    let response = await axios.get(PACKAGE_GET_URL);
    let result: PackageGetResponse = {
        status: response.status,
        message: response.statusText,
        data: response.data,
    };
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result: PackageGetResponse = {
        status: error.response!.status,
        message: error.response!.data.detail,
      };
      return result;
    } else {
      const result: PackageGetResponse = {
        status: 400,
        message: "Unknown Error",
      };
      return result;
    }
  }
};
