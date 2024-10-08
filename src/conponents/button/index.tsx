const BUTTONS = {
  PRIMARY: (props: any) => {
    const { children, ...restProps } = props;

    return (
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center"
        {...restProps}
      >
        {children}
      </button>
    );
  },
};

export default BUTTONS;
