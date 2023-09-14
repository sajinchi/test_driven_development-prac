export interface IProductCreateData {
    name: string;
    amount: number;
    discount_amount: number;
    inventory: number;
    description: string;
    images: FileList;
    token: string;
  }