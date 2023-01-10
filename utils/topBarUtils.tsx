import { BiFullscreen, BiMoon, BiSun } from "react-icons/bi";
import {
  MdOutlineSupport,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import { HiOutlineMenu } from "react-icons/hi";
import { RiNotification2Line } from "react-icons/ri";

const iconTypes = {
  menu: HiOutlineMenu,
  fullscreen: BiFullscreen,
  darkModeOff: BiMoon,
  darkModeOn: BiSun,
  notifications: RiNotification2Line,
  profileSettings: MdOutlineManageAccounts,
  support: MdOutlineSupport,
  signOut: VscSignOut,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
