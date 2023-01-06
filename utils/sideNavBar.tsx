import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { AiOutlinePieChart } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";
import { BiMoon } from "react-icons/bi";

const iconTypes = {
  rightArrow: RiMenuUnfoldLine,
  leftArrow: RiMenuFoldLine,
  darkMode: BiMoon,
  dashboard: AiOutlinePieChart,
  transactions: BiTransfer,
  profileSettings: MdOutlineManageAccounts,
  signOut: VscSignOut,
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
  {
    id: 2,
    icon: "profileSettings",
    text: "Settings",
    link: "/settings",
  },
];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
