import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";

const iconTypes = {
  rightArrow: RiMenuUnfoldLine,
  leftArrow: RiMenuFoldLine,
  dashboard: AiOutlineHome,
  transactions: BiTransfer,
};

export const navData = [
  {
    id: 0,
    icon: "dashboard",
    text: "Dashboard",
    link: "/",
  },
  {
    id: 1,
    icon: "transactions",
    text: "Transactions",
    link: "/transactions",
  },
];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
