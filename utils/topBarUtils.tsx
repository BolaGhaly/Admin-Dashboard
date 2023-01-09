import { BiMenu, BiFullscreen, BiMoon, BiSun } from "react-icons/bi";
import {
  MdOutlineNotifications,
  MdOutlineSupport,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";

const iconTypes = {
  menu: BiMenu,
  fullscreen: BiFullscreen,
  darkModeOff: BiMoon,
  darkModeOn: BiSun,
  notifications: MdOutlineNotifications,
  profileSettings: MdOutlineManageAccounts,
  support: MdOutlineSupport,
  signOut: VscSignOut,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
