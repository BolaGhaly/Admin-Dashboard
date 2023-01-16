import {
  BiFullscreen,
  BiExitFullscreen,
  BiMoon,
  BiSun,
  BiSupport,
} from "react-icons/bi";
import { MdOutlineManageAccounts, MdClose } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { RiNotification2Line } from "react-icons/ri";

const iconTypes = {
  menu: HiOutlineMenu,
  fullscreenOn: BiFullscreen,
  fullscreenOff: BiExitFullscreen,
  darkModeOff: BiMoon,
  darkModeOn: BiSun,
  notifications: RiNotification2Line,
  profileSettings: MdOutlineManageAccounts,
  support: BiSupport,
  signOut: IoLogOutOutline,
  closeMenu: MdClose,
};

export const profileData = [
  {
    id: 0,
    icon: "profileSettings",
    text: "Settings",
  },
  {
    id: 1,
    icon: "support",
    text: "Support",
  },
  {
    id: 2,
    icon: "signOut",
    text: "Sign Out",
  },
];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
