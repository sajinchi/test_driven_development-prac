import { IPaymentTypes } from "../paymentTypes/PaymentTypes";

export interface IPackage {
    amount: string;
    description: string;
    id: string;
    name: string;
    type: string;
    paymentTypes: IPaymentTypes[];
  }