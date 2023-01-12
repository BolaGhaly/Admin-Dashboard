import { BiFullscreen, BiExitFullscreen, BiMoon, BiSun } from "react-icons/bi";
import { MdOutlineSupportAgent, MdOutlineManageAccounts } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
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
  support: MdOutlineSupportAgent,
  signOut: VscSignOut,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
