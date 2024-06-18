import { Link, useSearchParams } from "react-router-dom";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";
import PageContainer from "../pageContainer";
import { useEffect, useState } from "react";
import invoiceApi from "../../api/invoiceApi";
import { ProductInfoItem } from "../product";

interface IInvoice {
  code: string;
  totalAmount: number;
  discount: number;
  paymentStatus: string;
  paymentMethod: string;
  createdAt: string;
  invoiceDetails: [];
}

const Reveived = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const [invoice, setInvoice] = useState<IInvoice>();

  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (!code) return;

    (async () => {
      const { succeed, data }: { succeed: boolean; data: IInvoice } =
        await invoiceApi.GetInvoiceByCode({ code });
      if (!succeed) return;
      setInvoice(data);
    })();
  }, [code]);

  if (!invoice) {
    return <p>loading...</p>;
  }

  return (
    <PageContainer>
      <div>
        <h2 className="mb-6 text-xl font-medium text-hightLight">
          Cảm ơn bạn, đơn hàng đã được ghi nhận. Chúng tôi gửi thông tin tài
          khoản qua email:{" "}
          <span className="text-3like">{auth.entity?.email}</span>
        </h2>
        <div className="flex items-stretch gap-x-10 bg-primary p-8">
          <div className="text-sm font-medium">
            <p className="uppercase text-hightLight">Mã đơn hàng: </p>
            <div className="h-3"></div>
            <p>{invoice.code}</p>
          </div>
          <div className="boder-white w-[1px] border border-l border-dashed"></div>
          <div className="text-sm font-medium">
            <p className="uppercase text-hightLight">Ngày mua hàng: </p>
            <div className="h-3"></div>
            <p>{invoice.createdAt}</p>
          </div>
          <div className="boder-white w-[1px] border border-l border-dashed"></div>
          <div className="text-sm font-medium">
            <p className="uppercase text-hightLight">Tổng cộng: </p>
            <div className="h-3"></div>
            <p>{invoice.totalAmount} vnđ</p>
          </div>
          <div className="boder-white w-[1px] border border-l border-dashed"></div>
          <div className="text-sm font-medium">
            <p className="uppercase text-hightLight">Hình thức thanh toán: </p>
            <div className="h-3"></div>
            <p>{invoice.paymentMethod}</p>
          </div>
        </div>

        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border mt-8">
          <h2 className="font-semibold mb-4 text-2xl ">Chi tiết đơn hàng</h2>
          <div className="flex flex-col gap-y-4">
            {invoice.invoiceDetails.map((detail: any) => (
              <ProductInfoItem
                title={detail.product.name}
                value={detail.unitPrice}
              />
            ))}
            <ProductInfoItem title={"Tổng cộng"} value={invoice.totalAmount} />
          </div>

          <div className="mt-12">
            <div className="ml-auto w-1/2">
              <Link to="/">Tiếp tục mua hàng</Link>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Reveived;
