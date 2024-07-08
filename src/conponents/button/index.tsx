const BUTTONS = {
  PRIMARY: (props: any) => {
    const { children } = props;

    return (
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-10 flex items-center">
        {children}
      </button>
    );
  },
};

export default BUTTONS;
