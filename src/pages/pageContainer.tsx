import { ReactNode } from "react";
import { Breadcrumb } from "../conponents";

interface IPageContainerProps {
  children: ReactNode;
}

const PageContainer = (props: IPageContainerProps) => {
  const { children } = props;

  return (
    <div className="grow max-w-screen-xl mx-auto w-full">
      <Breadcrumb />
      {children}
    </div>
  );
};

export default PageContainer;
