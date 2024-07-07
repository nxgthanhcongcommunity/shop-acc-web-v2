import { UserDropdownContent } from "..";
import { LoginBody } from "../../container";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";

const Account = () => {
  const user = useSelector((state: RootState) => state.user);
  if (user.isLogged) {
    return <UserDropdownContent unLimitHeight />;
  }

  return <LoginBody />;
};

export default Account;
