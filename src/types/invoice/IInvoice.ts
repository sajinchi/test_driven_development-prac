export interface IInvoice{
    created_at: string;
    id: string;
    is_paid: boolean;
    products_invoice_items:[];
    updated_at: string;
    user: string
}