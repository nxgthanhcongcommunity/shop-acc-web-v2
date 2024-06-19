import { SubmitHandler, useForm } from "react-hook-form";
import SelectField from "../../conponents/select-field";
import { PAYMENT_METHODS, PAYMENT_PROVIDERS } from "../../constants";
import { InputField } from "../../conponents";
import { vnpayTransactionApi } from "../../api";
import { useSelector } from "../../stores/hooks";
import { RootState } from "../../stores";

const Recharge = () => {
  const auth = useSelector((state: RootState) => state.auth);

  const providerHandler = {
    [PAYMENT_PROVIDERS.VNPAY]: async (props: any) => {
      const { accountCode, bankCode, amount } = props;
      const { succeed, data } = await vnpayTransactionApi.CreatePaymentUrl({
        amount,
        accountCode,
        bankCode: bankCode,
      });

      if (!succeed) return;
      window.location.href = data.paymentUrl;
    },
  };

  const handlePayment = async (props: any) => {
    const { provider, bankCode, amount } = props;
    if (!auth.entity) {
      return;
    }
    await providerHandler[provider]({
      accountCode: auth.entity.code,
      bankCode,
      amount,
    })
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = async (data) => {
    await handlePayment(data);
    reset();
  };

  return (
    <div className="grow max-w-screen-xl mx-auto w-full p-4 md:p-5">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 py-4 px-8 pb-8 border">
        <h2 className="font-semibold text-md mb-4">Nạp tiền vào tài khoản</h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          Các giao dịch chuyển sai "Nội dung chuyển khoản" sẽ không được xử lý
          tự động. Hãy liên hệ{" "}
          <a
            href="/"
            className="font-medium text-blue-700 underline hover:no-underline dark:text-blue-500"
          >
            Fanpage
          </a>{" "}
          để được hỗ trợ.
        </p>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <SelectField
              field="provider"
              fieldName="*Chọn cổng thanh toán"
              items={[
                {
                  value: PAYMENT_PROVIDERS.VNPAY,
                  name: PAYMENT_PROVIDERS.VNPAY,
                },
              ]}
              register={register}
              validator={{ required: "Vui lòng chọn cổng thanh toán!" }}
              errors={errors}
            />
          </div>
          <div className="mb-5">
            <SelectField
              field="bankCode"
              fieldName="Chọn hình thức thanh toán"
              items={[
                {
                  value: PAYMENT_METHODS.VNPAYQR,
                  name: PAYMENT_METHODS.VNPAYQR,
                },
                {
                  value: PAYMENT_METHODS.VNBANK,
                  name: PAYMENT_METHODS.VNBANK,
                },
                {
                  value: PAYMENT_METHODS.INTCARD,
                  name: PAYMENT_METHODS.INTCARD,
                },
              ]}
              register={register}
              errors={errors}
            />
          </div>
          <div className="mb-5">
            <InputField
              type="number"
              field="amount"
              fieldName="*Nhập số tiền cần nạp"
              errors={errors}
              register={register}
              validator={{
                valueAsNumber: true,
                min: { value: 10000, message: "Số tiền phải lớn hơn 10000" },
                required: { value: true, message: "Vui lòng nhập số tiền" },
              }}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Thanh toán
          </button>
        </form>
      </div>
    </div>
  );
};

export default Recharge;
