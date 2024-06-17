import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { ICONS } from "../conponents";
import { authApi } from "../api";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { useDispatch } from "../stores/hooks";
import { assignAuthInfo } from "../stores/features/authSlice";

interface IDecoded extends JwtPayload {
  account: any;
}

const Login = () => {
  return (
    <GoogleOAuthProvider clientId="231862296302-f7k64pkrnf3btno0837dv0egdt6h57hg.apps.googleusercontent.com">
      <LoginContainer />
    </GoogleOAuthProvider>
  );
};

const LoginContainer = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (credential) => {
      console.log(credential);

      const response = await authApi.LoginWithGoogle(credential);
      if (!response.succeed) return;

      const { token, refreshToken } = response.data;
      const decoded = jwtDecode<IDecoded>(token);
      dispatch(assignAuthInfo(decoded.account));
    },
  });

  return (
    <div className="grow max-w-screen-xl mx-auto w-full p-4 md:p-5 grid place-items-center">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[460px]">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Đăng nhập vào shop
          </h3>
        </div>
        <div className="p-4 md:p-5">
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Kết nối với shop của chúng tôi để gặt nhiều ưu đãi
          </p>
          <ul className="my-4 space-y-3">
            <li>
              <div
                onClick={() => handleGoogleLogin()}
                className="cursor-pointer flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <ICONS.GOOGLE_COLOR />

                <span className="flex-1 ms-3 whitespace-nowrap">Google</span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                  Popular
                </span>
              </div>
            </li>
          </ul>
          <div>
            <a
              href="/"
              className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
            >
              <span>
                <ICONS.HELP />
              </span>
              Why do I need to connect with my wallet?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
