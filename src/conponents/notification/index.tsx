import { BellOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { accountApi } from "../../api";
import { TOASTMSG_TYPES } from "../../constants";
import { useOutsideClick } from "../../hooks";
import { useToast } from "../../providers/toastProvider";
import { useWebSocket } from "../../providers/webSocketProvider";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";
import ICONS from "../icons";

const Notification = () => {
  const user = useSelector((state: RootState) => state.user);

  const [isShow, dropDownRef, handleClick, handleMouseLeave] =
    useOutsideClick<HTMLDivElement>();

  const { addToastMessage } = useToast();

  const [isHasNewNoti, setIsHasNewNoti] = useState(false);
  const [notifications, setNotifications] = useState<any>([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const accountCode = user?.code;
    if (accountCode == null) return;

    (async () => {
      const response = await accountApi.GetNotifications({
        accountCode,
      });

      if (response.succeed == false) {
        addToastMessage({
          id: "" + Date.now(),
          type: TOASTMSG_TYPES.SUCCESS,
          title: "Có lỗi xả ra",
          content: "Lấy danh sách thông báo không thành công",
        });
        return;
      }

      if (response.data != null) {
        setNotifications(response.data.notifications);
      }
    })();
  }, [toggle, user]);

  const ws = useWebSocket();

  const handleMessage = (event: MessageEvent) => {
    const message = JSON.parse(event.data);

    if (message.type === "BALANCE" && message.accountCode === user?.code) {
      setNotifications((prevNotifications: any) => [
        message,
        ...prevNotifications,
      ]);
      setIsHasNewNoti(true);

      addToastMessage({
        id: "" + Date.now(),
        type: TOASTMSG_TYPES.SUCCESS,
        title: message.title,
        content: message.content,
      });
    }
  };

  useEffect(() => {
    if (!ws) return;

    ws.addEventListener("message", handleMessage);

    return () => {
      ws.removeEventListener("message", handleMessage);
    };
  }, [ws]);

  useEffect(() => {
    isShow && setIsHasNewNoti(false);
  }, [isShow]);

  const handleMarkNotificationsRead = async (item?: any) => {
    const { succeed, data } = await accountApi.MarkNotificationsRead({
      code: item.code,
    });
    setToggle((prev) => !prev);
  };

  if (user == null) {
    return <></>;
  }

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div>
          <div className="flex items-center mb-3">
            <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              Thông báo mới
            </span>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-notification"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <ICONS.CLOSE />
            </button>
          </div>
          <div className="flex flex-col gap-y-1 flex max-h-[400px] overflow-y-scroll">
            {notifications.map((item: any) => (
              <div
                className={`flex items-center p-2 rounded-lg ${
                  item.isViewed ? "bg-white" : "bg-slate-300"
                }`}
                onClick={() => handleMarkNotificationsRead(item)}
              >
                <div className="relative inline-block shrink-0">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://png.pngtree.com/png-clipart/20190629/original/pngtree-vector-administration-icon-png-image_4090499.jpg"
                    alt="Jese Leos image"
                  />
                  <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                    <ICONS.MESSAGE />
                    <span className="sr-only">Message icon</span>
                  </span>
                </div>
                <div className="ms-3 text-sm font-normal">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </div>
                  <div className="text-sm font-normal">{item.content}</div>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
                    {item.createdAt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <Avatar
        onClick={handleClick}
        style={{ backgroundColor: "#1677ff" }}
        shape="square"
        icon={<BellOutlined style={{ width: "16px" }} />}
      />
    </Dropdown>
  );
};

export default Notification;
