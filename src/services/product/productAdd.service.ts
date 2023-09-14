import axios from "@/src/utils/axios";
import { IImage } from "@/src/types/IImage";
import { PRODUCT_CREATE_URL } from "@/src/constants/server.url";
import { INetwortRequestResponseState } from "@/src/types/INetworkRequestResponseState";

export const ProductAddService = async (name:string, amount:number, discount_amount:number, inventory:number, description:string, images:IImage[]) => {
  try {
    let response = await axios.post( PRODUCT_CREATE_URL,{
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