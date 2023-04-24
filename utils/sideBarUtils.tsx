import { AiOutlineHome } from "react-icons/ai";

const iconTypes = {
  dashboard: AiOutlineHome,
};

export const sideBarMenuData = ["dashboard"];
//"projects"
//"tasks"
//"users"];

export const sideBarTeams = ["Design", "Engineering", "QA Testing"];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
