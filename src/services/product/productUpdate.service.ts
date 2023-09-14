import axios from "@/src/utils/axios";
import { IImage } from "@/src/types/IImage";
import { PRODUCT_UPDATE_URL } from "@/src/constants/server.url";
import { INetwortRequestResponseState } from "@/src/types/INetworkRequestResponseState";

export const ProductUpdateService = async (name:string, amount:number, discount_amount:number, inventory:number, description:string, images:IImage[]) => {
  try {
    let response = await axios.put( PRODUCT_UPDATE_URL,{
      name,
      amount,
      discount_amount,
      inventory,
      description,
      images
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