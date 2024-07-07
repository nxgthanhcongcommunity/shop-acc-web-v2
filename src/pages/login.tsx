import { GoogleOAuthProvider } from "@react-oauth/google";
import { Breadcrumb } from "../conponents";
import { LoginBody } from "../container";

// const Login = () => {
//   return (
//     <GoogleOAuthProvider clientId="231862296302-f7k64pkrnf3btno0837dv0egdt6h57hg.apps.googleusercontent.com">
//       <LoginContainer />
//     </GoogleOAuthProvider>
//   );
// };

const LoginContainer = () => {
  return (
    <div className="grow max-w-screen-xl mx-auto w-full">
      <div className=" p-4 md:p-5 flex flex-col">
        <Breadcrumb />
        <div className="mt-20 mx-auto relative bg-white rounded-lg shadow dark:bg-gray-700 w-[460px]">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Đăng nhập vào shop
            </h3>
          </div>
          <LoginBody />
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
