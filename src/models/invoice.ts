
interface IProduct {
    name: string;
}

interface IInvoiceDetail {
    unitPrice: number
    product: IProduct
}

export interface IInvoice {
    id: number
    code: string
    totalAmount: string
    paymentStatus: string
    paymentMethod: string
    createdAt: string
    invoiceDetails: IInvoiceDetail[]
}