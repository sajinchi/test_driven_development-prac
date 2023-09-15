import axios from "@/src/utils/axios";
import { IInvoice } from "@/src/types/invoice/IInvoice";
import { INVOICE_GET_URL } from "@/src/constants/server.url";
import { INetwortRequestResponseState } from "@/src/types/INetworkRequestResponseState";


export interface InvoiceGetResponse extends INetwortRequestResponseState {
  data: IInvoice[];
}

export const InvoiceGetService = async () => {
  try {
    let response = await axios.get( INVOICE_GET_URL );
    let result: InvoiceGetResponse = {
        status: response.status,
        message: response.statusText,
        data: response.data,
    };
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result: InvoiceGetResponse = {
        status: error.response!.status,
        message: error.response!.data.detail,
        data: []
      };
      return result;
    } else {
      const result: InvoiceGetResponse = {
        status: 400,
        message: "Unknown Error",
        data: []
      };
      return result;
    }
  }
};
