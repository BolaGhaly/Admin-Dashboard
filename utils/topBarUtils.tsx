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
import { USA, Spain, Italy, Germany, Russia } from "../assets/flags";

const iconTypes = {
  menu: HiOutlineMenu,
  darkModeOff: moon,
  darkModeOn: sun,
  notifications: RiNotification2Line,
  profileSettings: RiUserSettingsLine,
  support: BiSupport,
  signOut: RiLogoutBoxRLine,
  arrowDown: MdKeyboardArrowDown,
  usaFlag: USA,
  spainFlag: Spain,
  italyFlag: Italy,
  germanyFlag: Germany,
  russiaFlag: Russia,
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
