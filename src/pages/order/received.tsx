import { Link, useSearchParams } from "react-router-dom";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";
import PageContainer from "../pageContainer";
import { useEffect, useState } from "react";
import invoiceApi from "../../api/invoiceApi";
import { ProductInfoItem } from "../product";
import { ROUTER } from "../../constants";

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
  const user = useSelector((state: RootState) => state.user);
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
      <div className="grow">
        <div className="mt-8">
          <h2 className="mb-6 text-xl font-medium text-hightLight">
            Cảm ơn bạn, đơn hàng đã được ghi nhận. Chúng tôi gửi thông tin tài
            khoản qua email:{" "}
            <span className="text-blue-700">{user.entity?.email}</span>
          </h2>
          <div className="flex items-stretch gap-x-10 bg-slate-100 p-8 relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border mt-8">
            <div className="text-sm">
              <p className="uppercase font-medium text-hightLight">Mã đơn hàng: </p>
              <div className="h-3"></div>
              <p>{invoice.code}</p>
            </div>
            <div className="boder-white w-[1px] border border-l border-dashed"></div>
            <div className="text-sm">
              <p className="uppercase font-medium text-hightLight">Ngày mua hàng: </p>
              <div className="h-3"></div>
              <p>{invoice.createdAt}</p>
            </div>
            <div className="boder-white w-[1px] border border-l border-dashed"></div>
            <div className="text-sm">
              <p className="uppercase font-medium text-hightLight">Tổng cộng: </p>
              <div className="h-3"></div>
              <p>{invoice.totalAmount} vnđ</p>
            </div>
            <div className="boder-white w-[1px] border border-l border-dashed"></div>
            <div className="text-sm">
              <p className="uppercase font-medium text-hightLight">Hình thức thanh toán: </p>
              <div className="h-3"></div>
              <p>{invoice.paymentMethod}</p>
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border mt-8 ml-auto w-3/4">
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
          </div>

          <div className="mt-4 flex justify-end">
            <Link to={ROUTER.ROOT}>
              <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Lựa tài khoản khác</button>
            </Link>
          </div>

        </div>
      </div>
    </PageContainer>
  );
};

export default Reveived;
