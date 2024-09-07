import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { accountApi, authApi } from "../../api";
import { ICONS } from "../../conponents";
import { LOCALSTORAGE_KEYS } from "../../constants";
import { useDispatch, useSelector } from "../../stores/hooks";
import { addUser } from "../../stores/features/userSlice";

const LoginBodyWrapper = () => {
  return (
    <GoogleOAuthProvider clientId="231862296302-f7k64pkrnf3btno0837dv0egdt6h57hg.apps.googleusercontent.com">
      <LoginBody />
    </GoogleOAuthProvider>
  );
};

interface IDecoded extends JwtPayload {
  accountCode: string;
  roles: string[];
}

const LoginBody = () => {
  const user = useSelector((states) => states.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (credential) => {
      const response = await authApi.LoginWithGoogle({
        accessToken: credential.access_token,
      });

      if (response.succeed === false) return;

      const { token, refreshToken } = response.data;
      localStorage.setItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN, token);
      localStorage.setItem(LOCALSTORAGE_KEYS.REFRESH_TOKEN, refreshToken);

      const { accountCode } = jwtDecode<IDecoded>(token);

      const getAccountByCodeResponse = await accountApi.GetAccountByCode({
        accountCode,
      });
      if (!getAccountByCodeResponse.succeed) return;

      dispatch(
        addUser({
          code: getAccountByCodeResponse.data.code,
          email: getAccountByCodeResponse.data.email,
          familyName: getAccountByCodeResponse.data.familyName,
          givenName: getAccountByCodeResponse.data.givenName,
          photo: getAccountByCodeResponse.data.photo,
          amount: getAccountByCodeResponse.data.amount,
        })
      );
    },
  });

  useEffect(() => {
    if (user === null) return;
    navigate(searchParams.get("redirect-from") || "/");
  }, [navigate, searchParams, user]);

  return (
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
  );
};

export default LoginBodyWrapper;
