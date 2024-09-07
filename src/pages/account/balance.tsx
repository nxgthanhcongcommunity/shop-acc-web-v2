import { useEffect, useState } from "react";
import { ITransaction } from "../../models";
import { transactionApi } from "../../api";
import { useSelector } from "../../stores/hooks";
import { useToast } from "../../providers/toastProvider";
import { TOASTMSG_TYPES } from "../../constants";
import { Table } from "antd";

const Balance = () => {
  const { addToastMessage } = useToast();
  const identity = useSelector((states) => states.user);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  useEffect(() => {
    (async () => {
      if (identity == null) return;
      const { succeed, data } = await transactionApi.GetTransactionHistory({
        accountCode: identity.code,
      });
      if (!succeed) {
        addToastMessage({
          id: "",
          type: TOASTMSG_TYPES.ERROR,
          title: "Có lỗi xảy ra",
          content: "Lấy thông tin Lịch sử giao dịch không thành công",
        });
      }

      setTransactions(data.records);
    })();
  }, [identity]);

  const columns = [
    {
      title: "Mã giao dịch",
      dataIndex: "transactionNo",
      key: "transactionNo",
    },
    {
      title: "Nhà cung cấp",
      dataIndex: "provider",
      key: "provider",
    },
    {
      title: "Số tiền",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Nội dung",
      dataIndex: "orderInfo",
      key: "orderInfo",
    },
    {
      title: "Ngày giao dịch",
      dataIndex: "payDate",
      key: "payDate",
    },
    {
      title: "Trạng thái",
      dataIndex: "succeed",
      key: "succeed",
    },
  ];

  return <Table dataSource={transactions} columns={columns} />;
};

export default Balance;
