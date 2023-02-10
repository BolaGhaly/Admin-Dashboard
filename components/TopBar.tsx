import { openSideBarReverse } from "../store/sideBar";
import { toggledarkMode } from "../store/darkMode";
import Icon from "../utils/topBarUtils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import UserProfile from "./UserProfile";
import NotificationsMenu from "./NotificationsMenu";
import styles from "../styles/modules/topBar.module.scss";

const Topbar = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <nav className={styles.topNavBar}>
      <button onClick={() => dispatch(openSideBarReverse())} title="Menu">
        <Icon name="menu" />
      </button>
      <div>
        <NotificationsMenu />
        <button onClick={() => dispatch(toggledarkMode())} title="Theme Mode">
          {darkMode ? <Icon name="darkModeOn" /> : <Icon name="darkModeOff" />}
        </button>
        <UserProfile />
      </div>
    </nav>
  );
};

export default Topbar;
