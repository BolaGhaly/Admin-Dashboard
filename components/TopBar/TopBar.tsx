import { openSideBarReverse } from "../../store/sideBar";
import { toggledarkMode } from "../../store/darkMode";
import Icon from "../../utils/topBarUtils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import UserProfile from "./UserProfile";
import NotificationsMenu from "./NotificationsMenu";
import styles from "./topBar.module.scss";
import { poppinsFont } from "../../fonts";
import LanguagesMenu from "./LanguagesMenu";

const Topbar = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <nav className={styles.topNavBar} style={poppinsFont.style}>
      <button onClick={() => dispatch(openSideBarReverse())} title="Menu">
        <Icon name="menu" />
      </button>
      <div>
        <LanguagesMenu />
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
