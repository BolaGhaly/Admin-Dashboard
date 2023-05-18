import { MdDashboard, MdDesignServices } from "react-icons/md";
import { IoBagHandle, IoLogOut } from "react-icons/io5";
import { HiUsers, HiCode } from "react-icons/hi";
import { RiFileList3Fill } from "react-icons/ri";
import { RiUserSettingsFill } from "react-icons/ri";
import closeButton from "../assets/sideBarIcons/closeButton.svg";
import companyLogo from "../assets/sideBarIcons/companyLogo.svg";
import marketing from "../assets/sideBarIcons/marketing.svg";
import sales from "../assets/sideBarIcons/sales.svg";

const iconTypes = {
  companyLogo,
  closeSideBar: closeButton,
  dashboard: MdDashboard,
  products: IoBagHandle,
  customers: HiUsers,
  transactions: RiFileList3Fill,
  profileSettings: RiUserSettingsFill,
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

export const sideBarTeams = ["marketing", "sales", "design", "engineering"];

export const sideBarProfile = [
  {
    title: "Settings",
    icon: "profileSettings",
  },
  {
    title: "Sign Out",
    icon: "signOut",
  },
];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
