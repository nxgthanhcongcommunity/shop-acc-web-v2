import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";
import { ROUTER } from "../../constants";

const PrivateElement = (props: any) => {

    const { children } = props;

    const auth = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();
    const location = useLocation();

    console.log(auth.isLogged == null || auth.isLogged == false)


    if (auth.isLogged == null || auth.isLogged == false) {
        const to = `${ROUTER.LOGIN}?redirect-from=${location.pathname}${location.search}`;
        return <Navigate to={to} />
    }

    return children;
};

export default PrivateElement;
