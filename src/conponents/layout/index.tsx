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
    dispatch(getByKey("home-page"));
  }, []);

  return (
    <div className="dark:bg-gray-900 min-h-screen flex flex-col bg-slate-100">
      <ToastList />
      <Header />
      <div className="h-[76px]"></div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
