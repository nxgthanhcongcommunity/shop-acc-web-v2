import { ReactNode } from "react";
import { Breadcrumb } from "../conponents";

interface IPageContainerProps {
  isBreadcrumb?: boolean;
  children: ReactNode;
}

const PageContainer = (props: IPageContainerProps) => {
  const { isBreadcrumb, children } = props;

  return (
    <div className="grow max-w-screen-xl mx-auto w-full flex flex-col px-4 md:px-0">
      {isBreadcrumb && <Breadcrumb />}
      {children}
    </div>
  );
};

export default PageContainer;
