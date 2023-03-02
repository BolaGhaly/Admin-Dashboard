import { BiMoon, BiSun, BiSupport, BiUserPlus } from "react-icons/bi";
import {
  MdOutlineManageAccounts,
  MdClose,
  MdOutlineLogout,
} from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import { RiNotification2Line } from "react-icons/ri";

const iconTypes = {
  menu: HiOutlineMenu,
  darkModeOff: BiMoon,
  darkModeOn: BiSun,
  notifications: RiNotification2Line,
  profileSettings: MdOutlineManageAccounts,
  support: BiSupport,
  signOut: MdOutlineLogout,
  closeMenu: MdClose,
  newUser: BiUserPlus,
};

export const profileData = [
  {
    id: 0,
    icon: "profileSettings",
    text: "Settings",
    title: "Settings",
  },
  {
    id: 1,
    icon: "support",
    text: "Support",
    title: "Support",
  },
  {
    id: 2,
    icon: "signOut",
    text: "Sign Out",
    title: "Sign Out",
  },
];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
