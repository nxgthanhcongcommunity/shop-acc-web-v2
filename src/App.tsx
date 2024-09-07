import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./conponents";
import PrivateElement from "./conponents/layout/privateElement";
import { ROUTER } from "./constants";
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
            crumb: () => <Link to={ROUTER.LOGIN}>Đăng nhập</Link>,
          },
        },
        {
          path: ROUTER.SHOP,
          element: <Shop />,
          handle: {
            crumb: () => <Link to={ROUTER.SHOP}>Sản phẩm</Link>,
          },
        },
        {
          path: ROUTER.PRODUCT,
          element: <Product />,
          handle: {
            crumb: () => <Link to={ROUTER.PRODUCT}>Sản phẩm</Link>,
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
              element: (
                <PrivateElement>
                  <OrderReceived />
                </PrivateElement>
              ),
              handle: {
                crumb: () => (
                  <Link to={ROUTER.ORDER_RECEIVED}>Thông tin đơn hàng</Link>
                ),
              },
            },
          ],
        },
        {
          path: ROUTER.ACCOUNT,
          element: <Account />,
          handle: {
            crumb: () => <Link to={ROUTER.ACCOUNT}>Tài khoản</Link>,
          },
          children: [
            {
              index: true,
              element: (
                <PrivateElement>
                  <AccountInfo />
                </PrivateElement>
              ),
            },
            {
              path: ROUTER.ACCOUNT_RECHARGE,
              element: (
                <PrivateElement>
                  <AccountRecharge />
                </PrivateElement>
              ),
              handle: {
                crumb: (props: any) => {
                  return <Link to={ROUTER.ACCOUNT_RECHARGE}>Nạp thẻ</Link>;
                },
              },
            },
            {
              path: ROUTER.ACCOUNT_RECEIVED,
              element: (
                <PrivateElement>
                  <AccountReceived />
                </PrivateElement>
              ),
              handle: {
                crumb: (props: any) => {
                  return (
                    <Link to={ROUTER.ACCOUNT_RECEIVED}>Thông tin nạp thẻ</Link>
                  );
                },
              },
            },
            {
              path: ROUTER.ACCOUNT_BALANCE,
              element: (
                <PrivateElement>
                  <AccountBalance />
                </PrivateElement>
              ),
              handle: {
                crumb: (props: any) => {
                  return (
                    <Link to={ROUTER.ACCOUNT_BALANCE}>Biến động số dư</Link>
                  );
                },
              },
            },
            {
              path: ROUTER.ACCOUNT_INVOICE,
              element: (
                <PrivateElement>
                  <AccountInvoice />
                </PrivateElement>
              ),
              handle: {
                crumb: (props: any) => {
                  return (
                    <Link to={ROUTER.ACCOUNT_INVOICE}>Lịch sử mua hàng</Link>
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
  ]
  // {
  //   basename: "/web",
  // }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
