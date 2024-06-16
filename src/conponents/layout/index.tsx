import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const Layout = () => {
  return (
    <div className="dark:bg-gray-900 min-h-screen flex flex-col bg-slate-100">
      <Header />
      <div className="h-[76px]"></div>
      {/* <div className="grow flex justify-center items-center">
        
      </div> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
