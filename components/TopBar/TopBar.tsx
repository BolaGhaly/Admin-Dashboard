import { toggleSideBar } from "../../store/slices/sideBar";
import { toggledarkMode } from "../../store/slices/darkMode";
import Icon from "../../utils/topBarUtils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import UserProfile from "./UserProfile";
import NotificationsMenu from "./NotificationsMenu";
import styles from "./topBar.module.scss";
import LanguagesMenu from "./LanguagesMenu";

const Topbar = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <nav className={styles.topNavBar}>
      <button onClick={() => dispatch(toggleSideBar())} title="Menu">
        <Icon name="menu" />
      </button>
      <div>
        <LanguagesMenu />
        <NotificationsMenu />
        <button
          onClick={() => dispatch(toggledarkMode())}
          title="Theme Mode"
          className={styles.darkModeBtn}
        >
          {darkMode ? <Icon name="darkModeOn" /> : <Icon name="darkModeOff" />}
        </button>
        <UserProfile />
      </div>
    </nav>
  );
};

export default Topbar;
