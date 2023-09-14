import axios from "axios";
import { INVOICE_DOWNLOAD_URL } from "@/src/constants/server.url";

export const DownloadInvoiceService = async( id:string )=> {
    try {
        let response = await axios.get(INVOICE_DOWNLOAD_URL + id + '/download/',{
            headers:{
                'Content-Type': 'multipart/form-data',
            },
            responseType: 'blob',
        })
        return response;
    } catch (error) {
        console.error('Error occurred:', error);
        throw error;
    }
}