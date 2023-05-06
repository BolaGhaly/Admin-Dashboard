import { MdDashboard } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { RiFileList3Fill } from "react-icons/ri";
import companyLogoLight from "../assets/sideBarIcons/companyLogoLight.svg";
import companyLogoDark from "../assets/sideBarIcons/companyLogoDark.svg";

const iconTypes = {
  companyLogoLight,
  companyLogoDark,
  dashboard: MdDashboard,
  products: IoBagHandle,
  customers: HiUsers,
  transactions: RiFileList3Fill,
};

export const sideBarMenuData = [
  "dashboard",
  "products",
  "customers",
  "transactions",
];
//"projects"
//"tasks"
//"users"];

export const sideBarTeams = ["Design", "Engineering", "QA Testing"];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
