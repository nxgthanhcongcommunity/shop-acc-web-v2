import { Navigate, useLocation } from "react-router-dom";
import { ROUTER } from "../../constants";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";

const PrivateElement = (props: any) => {
  const { children } = props;

  const user = useSelector((state: RootState) => state.user);
  const location = useLocation();

  if (user.isLogged === false) {
    const to = `${ROUTER.LOGIN}?redirect-from=${location.pathname}${location.search}`;
    return <Navigate to={to} />;
  }

  return children;
};

export default PrivateElement;
