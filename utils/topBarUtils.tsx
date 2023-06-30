import { BiSupport } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import {
  RiNotification2Line,
  RiLogoutBoxRLine,
  RiUserSettingsLine,
} from "react-icons/ri";
import moon from "/assets/topBarIcons/moon.svg";
import sun from "/assets/topBarIcons/sun.svg";
import emptyNotificationsLight from "/assets/topBarIcons/emptyNotificationsLight.svg";
import emptyNotificationsDark from "/assets/topBarIcons/emptyNotificationsDark.svg";
import {
  USA_flag,
  Spain_flag,
  Italy_flag,
  Germany_flag,
  Russia_flag,
} from "../assets/flags";

const iconTypes = {
  menu: HiOutlineMenu,
  darkModeOff: moon,
  darkModeOn: sun,
  notifications: RiNotification2Line,
  profileSettings: RiUserSettingsLine,
  support: BiSupport,
  signOut: RiLogoutBoxRLine,
  arrowDown: MdKeyboardArrowDown,
  usaFlag: USA_flag,
  spainFlag: Spain_flag,
  italyFlag: Italy_flag,
  germanyFlag: Germany_flag,
  russiaFlag: Russia_flag,
  emptyNotificationsLight,
  emptyNotificationsDark,
};

export const profileData = [
  {
    icon: "profileSettings",
    title: "Settings",
  },
  {
    icon: "support",
    title: "Support",
  },
  {
    icon: "signOut",
    title: "Sign Out",
  },
];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
