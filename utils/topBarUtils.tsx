import { BiSupport } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import {
  RiNotification2Line,
  RiLogoutBoxRLine,
  RiUserSettingsLine,
} from "react-icons/ri";
import USA_flag from "/assets/flags/USA_flag.svg";
import Spain_flag from "/assets/flags/Spain_flag.svg";
import Italy_flag from "/assets/flags/Italy_flag.svg";
import Germany_flag from "/assets/flags/Germany_flag.svg";
import Russia_flag from "/assets/flags/Russia_flag.svg";
import moon from "/assets/topBarIcons/moon.svg";
import sun from "/assets/topBarIcons/sun.svg";

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
