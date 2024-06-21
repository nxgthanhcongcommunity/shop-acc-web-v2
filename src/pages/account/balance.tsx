import { useEffect, useState } from "react";
import { ITransaction } from "../../models";
import { transactionApi } from "../../api";
import { useSelector } from "../../stores/hooks";
import { useToast } from "../../providers/toastProvider";
import { TOASTMSG_TYPES } from "../../constants";

const Balance = () => {

    const { addToastMessage } = useToast();
    const user = useSelector(states => states.user);
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    const accountCode = user.entity?.code;
    useEffect(() => {
        (async () => {
            if (accountCode == null) return;
            const response = await transactionApi.GetTransactionHistory({ accountCode });
            if (response.succeed == false) {
                addToastMessage({
                    id: "",
                    type: TOASTMSG_TYPES.ERROR,
                    title: "Có lỗi xảy ra",
                    content: "Lấy thông tin Lịch sử giao dịch không thành công"
                })
            }

            setTransactions(response.data);
        })()
    }, [accountCode])

    return (
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border">
            <h2 className="font-semibold text-md mb-4">Lịch sử giao dịch</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Mã giao dịch
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nhà cung cấp
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Số tiền
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Trạng thái
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nội dung chuyển khoản
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ngày giao dịch
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map(record => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {record.transactionNo}
                                    </th>
                                    <td className="px-6 py-4">{record.provider}</td>
                                    <td className="px-6 py-4">{record.amount}</td>
                                    <td className="px-6 py-4">{record.succeed ? "Thành công" : "Thất bại"}</td>
                                    <td className="px-6 py-4">{record.orderInfo}</td>
                                    <td className="px-6 py-4">{record.payDate}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <nav
                    className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
                    aria-label="Table navigation"
                >
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                        Showing{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">1-10</span>{" "}
                        of{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                    </span>
                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                Previous
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                2
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                aria-current="page"
                                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            >
                                3
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                4
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                5
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>


    )
};

export default Balance;
