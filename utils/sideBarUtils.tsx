import { MdDashboard, MdDesignServices } from "react-icons/md";
import { IoBagHandle, IoLogOut } from "react-icons/io5";
import { HiUsers, HiCode } from "react-icons/hi";
import { RiFileList3Fill } from "react-icons/ri";
import { RiUserSettingsFill } from "react-icons/ri";
import closeButton from "../assets/sideBarIcons/closeButton.svg";
import companyLogo from "../assets/sideBarIcons/companyLogo.svg";
import marketing from "../assets/sideBarIcons/marketing.svg";
import sales from "../assets/sideBarIcons/sales.svg";
import { Variants } from "framer-motion";

export const sideBarH2Variants: Variants = {
  open: {
    opacity: 1,
    visibility: "visible",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    visibility: "hidden",
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};

export const sideBarItemVariants: Variants = {
  open: {
    display: "block",
    opacity: 1,
    visibility: "visible",
    translateX: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  closed: {
    display: "none",
    opacity: 0,
    visibility: "hidden",
    translateX: -8,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};

const iconTypes = {
  companyLogo,
  closeSideBar: closeButton,
  dashboard: MdDashboard,
  products: IoBagHandle,
  customers: HiUsers,
  transactions: RiFileList3Fill,
  settings: RiUserSettingsFill,
  signOut: IoLogOut,
  marketing,
  sales,
  design: MdDesignServices,
  engineering: HiCode,
};

export const sideBarMenu = [
  "dashboard",
  "products",
  "customers",
  "transactions",
];
export const sideBarMenuLinks = [
  "/dashboard",
  "/products",
  "/customers",
  "/transactions",
];

export const sideBarTeams = ["marketing", "sales", "design", "engineering"];
export const sideBarTeamsLinks = [
  "/teams/marketing",
  "/teams/sales",
  "/teams/design",
  "/teams/engineering",
];

export const sideBarProfile = [
  {
    title: "Settings",
    icon: "settings",
  },
  {
    title: "Sign Out",
    icon: "signOut",
  },
];
export const sideBarProfileLinks = ["/account/settings", "/account/signOut"];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
