import { BiMoon, BiSun, BiSupport } from "react-icons/bi";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import {
  RiNotification2Line,
  RiLogoutBoxRLine,
  RiUserSettingsLine,
} from "react-icons/ri";
import USA_flag from "/assets/flags/USA_flag.svg";

const iconTypes = {
  menu: HiOutlineMenu,
  darkModeOff: BiMoon,
  darkModeOn: BiSun,
  notifications: RiNotification2Line,
  profileSettings: RiUserSettingsLine,
  support: BiSupport,
  signOut: RiLogoutBoxRLine,
  closeMenu: MdClose,
  arrowDown: MdKeyboardArrowDown,
  usaFlag: USA_flag,
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
