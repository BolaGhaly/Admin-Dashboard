import Icon from "../../utils/sideBarUtils";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
//import styles from "../styles/modules/sideBar.module.scss";

const SideBarProfile = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );

  return (
    <div>
      <a href="#">
        <Icon name="profileSettings" />
        <p className={`${openSideBar ? null : "hidden"}`}> Support</p>
      </a>
      <a href="#">
        <Icon name="signOut" />
        <p className={`${openSideBar ? null : "hidden"}`}> Sign Out</p>
      </a>
    </div>
  );
};

export default SideBarProfile;
