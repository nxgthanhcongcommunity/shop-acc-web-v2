import { ReactNode } from "react";

interface ITitleButtonProps {
    isActived?: boolean;
    bg?: boolean;
    children: ReactNode;
}

const TitleButton = (props: any) => {
    const { isActived, bg, children } = props;

    return (
        <div
            className={
                "gap-x-2 inline-flex items-center text-sm font-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-white "
                + (isActived ? " text-blue-600 " : " text-gray-700 ")
                + (bg && (" rounded-md p-2 bg-slate-200 "))
            }
        >
            {children}
        </div>
    )
};

export default TitleButton;
