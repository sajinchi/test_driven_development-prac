import axios from "@/src/utils/axios";
import { IProduct } from "@/src/types/product/IProduct";
import { SUBSCRIPTION_GET_URL } from "@/src/constants/server.url";
import { INetwortRequestResponseState } from "@/src/types/INetworkRequestResponseState";


export interface SubscriptionGetResponse extends INetwortRequestResponseState {
  data?: IProduct[];
}

export const SubscriptionGetService = async () => {
  try {
    let response = await axios.get( SUBSCRIPTION_GET_URL );
    console.log(response);
    // let result: ProductGetResponse = {
    //     status: response.status,
    //     message: response.statusText,
    //     data: response.data,
    // };
    // return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result: SubscriptionGetResponse = {
        status: error.response!.status,
        message: error.response!.data.detail,
      };
      return result;
    } else {
      const result: SubscriptionGetResponse = {
        status: 400,
        message: "Unknown Error",
      };
      return result;
    }
  }
};
