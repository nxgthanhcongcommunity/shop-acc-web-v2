import ICONS from "../conponents/icons";
import ROUTER from "./router";

const CATEGORIES_MENU = [
  {
    href: ROUTER.ACCOUNT_RECHARGE,
    icon: <ICONS.RECHARGE />,
    title: "Nạp thẻ",
  },
  {
    href: ROUTER.NEWS,
    icon: <ICONS.NEWSPAPER />,
    title: "Tin tức",
  },
];

export default CATEGORIES_MENU;
