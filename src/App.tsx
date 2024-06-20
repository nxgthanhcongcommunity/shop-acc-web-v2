import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { BreadcrumbItem, ICONS, Layout } from "./conponents";
import {
  Account,
  AccountBalance,
  AccountInfo,
  AccountInvoice,
  AccountReceived,
  AccountRecharge,
  Home,
  Login,
  Nomatch,
  Order,
  OrderBasket,
  OrderPayment,
  OrderReceived,
  Product,
  Shop,
} from "./pages";
import { ROUTER } from "./constants";
import PrivateElement from "./conponents/layout/privateElement";

const router = createBrowserRouter(
  [
    {
      path: ROUTER.ROOT,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ROUTER.LOGIN,
          element: <Login />,
          handle: {
            crumb: (props: any) => {
              return (
                <BreadcrumbItem
                  path={ROUTER.LOGIN}
                  title={"Đăng nhập"}
                  icon={<ICONS.LOGOUT />}
                />
              );
            },
          },
        },
        {
          path: ROUTER.SHOP,
          element: <Shop />,
          handle: {
            crumb: (props: any) => {
              return (
                <BreadcrumbItem
                  path={ROUTER.SHOP}
                  title={"Sản phẩm"}
                  icon={<ICONS.RECHARGE />}
                />
              );
            },
          },
        },
        {
          path: ROUTER.PRODUCT,
          element: <Product />,
          handle: {
            crumb: (props: any) => {
              return (
                <BreadcrumbItem
                  path={ROUTER.PRODUCT}
                  title={"Sản phẩm"}
                  icon={<ICONS.ADDRESS_CARD />}
                />
              );
            },
          },
        },
        {
          path: ROUTER.ORDER,
          element: <Order />,
          children: [
            {
              index: true,
              element: <OrderBasket />,
            },
            {
              path: ROUTER.PAYMENT,
              element: <OrderPayment />,
            },
            {
              path: ROUTER.ORDER_RECEIVED,
              element: <PrivateElement><OrderReceived /></PrivateElement>,
              handle: {
                crumb: (props: any) => {
                  return (
                    <BreadcrumbItem
                      path={ROUTER.ORDER_RECEIVED}
                      title={"Thông tin đơn hàng"}
                      icon={<ICONS.RECEIPT />}
                    />
                  );
                },
              },
            },
          ],
        },
        {
          path: ROUTER.ACCOUNT,
          element: <Account />,
          handle: {
            crumb: () => (
              <BreadcrumbItem
                path={ROUTER.ACCOUNT}
                title={"Tài khoản"}
                icon={<ICONS.ACCOUNT className="w-3 h-3" />}
              />
            ),
          },
          children: [
            {
              index: true,
              element: <PrivateElement><AccountInfo /></PrivateElement>,
            },
            {
              path: ROUTER.ACCOUNT_RECHARGE,
              element: <PrivateElement><AccountRecharge /></PrivateElement>,
              handle: {
                crumb: (props: any) => {
                  return (
                    <BreadcrumbItem
                      path={ROUTER.ACCOUNT_RECHARGE}
                      title={"Nạp thẻ"}
                      icon={<ICONS.RECHARGE />}
                    />
                  );
                },
              },
            },
            {
              path: ROUTER.ACCOUNT_RECEIVED,
              element: <PrivateElement><AccountReceived /></PrivateElement>,
              handle: {
                crumb: (props: any) => {
                  return (
                    <BreadcrumbItem
                      path={ROUTER.ACCOUNT_RECEIVED}
                      title={"Thông tin nạp thẻ"}
                      icon={<ICONS.RECHARGE />}
                    />
                  );
                },
              },
            },
            {
              path: ROUTER.ACCOUNT_BALANCE,
              element: <PrivateElement><AccountBalance /></PrivateElement>,
              handle: {
                crumb: (props: any) => {
                  return (
                    <BreadcrumbItem
                      path={ROUTER.ACCOUNT_BALANCE}
                      title={"Biến động số dư"}
                      icon={<ICONS.RECHARGE />}
                    />
                  );
                },
              },
            },
            {
              path: ROUTER.ACCOUNT_INVOICE,
              element: <PrivateElement><AccountInvoice /></PrivateElement>,
              handle: {
                crumb: (props: any) => {
                  return (
                    <BreadcrumbItem
                      path={ROUTER.ACCOUNT_INVOICE}
                      title={"Lịch sử mua hàng"}
                      icon={<ICONS.RECHARGE />}
                    />
                  );
                },
              },
            },

          ],
        },
        {
          path: ROUTER.ALLROUTER,
          element: <Nomatch />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
