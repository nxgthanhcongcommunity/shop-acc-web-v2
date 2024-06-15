import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const Layout = () => {
  return (
    <div className="dark:bg-gray-900 min-h-screen flex flex-col bg-slate-100">
      <Header />
      <div className="grow flex justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
