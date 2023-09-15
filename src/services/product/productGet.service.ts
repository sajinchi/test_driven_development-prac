import axios from "@/src/utils/axios";
import { IProduct } from "@/src/types/product/IProduct";
import { PRODUCT_GET_URL } from "@/src/constants/server.url";
import { INetwortRequestResponseState } from "@/src/types/INetworkRequestResponseState";


export interface ProductGetResponse extends INetwortRequestResponseState {
  data: IProduct[];
}

export const ProductGetService = async () => {
  try {
    let response = await axios.get( PRODUCT_GET_URL );
    let result: ProductGetResponse = {
        status: response.status,
        message: response.statusText,
        data: response.data,
    };
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result: ProductGetResponse = {
        status: error.response!.status,
        message: error.response!.data.detail,
        data: []
      };
      return result;
    } else {
      const result: ProductGetResponse = {
        status: 400,
        message: "Unknown Error",
        data: [],
      };
      return result;
    }
  }
};
