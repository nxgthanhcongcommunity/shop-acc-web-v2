
interface IIconButtonProps {
  isActived?: boolean;
  children: React.ReactNode;
}

const IconButton = (props: IIconButtonProps) => {
  const { isActived, children } = props;
  return (
    <div
      className={
        "dark:hover:text-white hover:text-blue-600 text-slate-500 dark:text-gray-400 bg-gray-200 hover:bg-gray-300 rounded-lg w-10 h-10 dark:bg-gray-600 dark:hover:bg-gray-700 flex items-center justify-center cursor-pointer "
        + (isActived && (" text-blue-600 bg-gray-300"))
      }
    >
      {children}
    </div>
  );
};

export default IconButton;
