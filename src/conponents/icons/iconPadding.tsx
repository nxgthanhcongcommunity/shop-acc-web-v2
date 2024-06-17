import ICONS from ".";

const IconPadding = (props: any) => {
  const { children } = props;

  return (
    <span className="text-slate-600 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 h-10 w-10 flex items-center justify-center">
      <span>{children}</span>
    </span>
  );
};

export default IconPadding;
