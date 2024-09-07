import { useEffect, useState } from "react";
import { IInvoice } from "../../models/invoice";
import { useToast } from "../../providers/toastProvider";
import { useSelector } from "../../stores/hooks";
import invoiceApi from "../../api/invoiceApi";
import { TOASTMSG_TYPES } from "../../constants";
import { Table } from "antd";

const Invoice = () => {
  const { addToastMessage } = useToast();
  const identity = useSelector((states) => states.user);
  const [invoices, setInvoices] = useState<IInvoice[]>([]);

  useEffect(() => {
    (async () => {
      if (identity == null) return;
      const { succeed, data } = await invoiceApi.GetPurchaseHistoryAsync({
        accountCode: identity.code,
      });
      if (!succeed) {
        addToastMessage({
          id: "",
          type: TOASTMSG_TYPES.ERROR,
          title: "Có lỗi xảy ra",
          content: "Lấy thông tin Lịch sử mua hàng không thành công",
        });
      }

      console.log(data);

      setInvoices(data.records);
    })();
  }, [identity]);

  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Ngày mua",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Giảm giá",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Trạng thái",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
    },
    {
      title: "Số tiền",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
  ];

  return <Table dataSource={invoices} columns={columns} />;
};

export default Invoice;
