import { IImage } from "../IImage";

export interface IProduct {
  active: boolean;
  amount: string;
  created_at: string;
  deleted_at: null;
  description: string;
  discount_amount: string;
  id: string;
  images: IImage[];
  inventory: number;
  name: string;
  updated_at: string;
}
