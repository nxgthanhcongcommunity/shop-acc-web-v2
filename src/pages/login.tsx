import { LoginBody } from "../container";
import PageContainer from "./pageContainer";

const LoginContainer = () => {
  return (
    <PageContainer isBreadcrumb>
      <div className="mt-20 mx-auto relative bg-white rounded-lg shadow dark:bg-gray-700 w-[460px]">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Đăng nhập vào shop
          </h3>
        </div>
        <LoginBody />
      </div>
    </PageContainer>
  );
};

export default LoginContainer;
