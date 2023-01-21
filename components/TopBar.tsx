import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import TopBarIcons from "./topBar/TopBarIcons";
import styles from "../styles/modules/topBar.module.scss";

const Topbar = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <nav className={styles.topNavBar}>
      <TopBarIcons />
    </nav>
  );
};

export default Topbar;
