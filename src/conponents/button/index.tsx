interface IButtonProps {
  variant: "purple";
  type?: "submit";
  title: string;
  href?: string;
  path?: string;
}

const Button = (props: IButtonProps) => {
  const { type } = props;

  let ButtonType: React.ReactNode;
  if (type != null) {
    ButtonType = (
      <button
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Purple
      </button>
    );
  }

  return (
    <a
      href="/"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-10 flex items-center"
    >
      Nạp thẻ
    </a>
  );
};

export default Button;
