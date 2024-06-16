import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { BreadcrumbItem, ICONS, Layout } from "./conponents";
import {
  Account,
  AccountInfo,
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
        },
        {
          path: ROUTER.SHOP,
          element: <Shop />,
        },
        {
          path: ROUTER.PRODUCT,
          element: <Product />,
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
              path: ROUTER.RECEIVED,
              element: <OrderReceived />,
            },
          ],
        },
        {
          path: ROUTER.ACCOUNT,
          element: <Account />,
          handle: {
            crumb: () => (
              <BreadcrumbItem
                path={`/${ROUTER.ACCOUNT}`}
                title={"Tài khoản"}
                icon={<ICONS.ACCOUNT className="w-3 h-3" />}
              />
            ),
          },
          children: [
            {
              index: true,
              element: <AccountInfo />,
            },
            {
              path: ROUTER.RECHARGE,
              element: <AccountRecharge />,
              handle: {
                crumb: (props: any) => {
                  console.log("props:", props);

                  return (
                    <BreadcrumbItem
                      path={ROUTER.RECHARGE}
                      title={"Nạp thẻ"}
                      icon={<ICONS.RECHARGE />}
                    />
                  );
                },
              },
            },
            {
              path: ROUTER.RECEIVED,
              element: <AccountReceived />,
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
