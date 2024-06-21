export interface ITransaction {
    id: number;
    transactionNo: string;
    provider: string;
    amount: string;
    succeed: boolean;
    orderInfo: string;
    payDate: string;
}