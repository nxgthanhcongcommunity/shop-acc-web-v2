import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import ToastList from "../toast-list";
import { useDispatch } from "../../stores/hooks";
import { useEffect } from "react";
import { getByKey } from "../../stores/features/masterSlice";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetching home-page data on initial mount
    dispatch(getByKey("home-page"));
    // Dependencies array intentionally left empty to run once on mount
  }, [dispatch]);

  return (
    <div className="dark:bg-gray-900 min-h-screen flex flex-col bg-slate-100">
      <ToastList />
      <Header />
      {/* Spacer div for header offset */}
      <div className="h-[76px]"></div>
      {/* Main content outlet for nested routes */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
