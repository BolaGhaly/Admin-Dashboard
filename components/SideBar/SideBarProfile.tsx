import Icon from "../../utils/sideBarUtils";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./sideBar.module.scss";
import { closeSideBar } from "../../store/slices/sideBar";

const SideBarProfile = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const dispatch = useDispatch();

  return (
    <div className={styles.sideBarProfile}>
      <div onClick={() => dispatch(closeSideBar())}>
        <button>
          <Icon name="profileSettings" />
        </button>
        <span className={`${openSideBar ? null : "hidden"}`}>Support</span>
      </div>
      <div onClick={() => dispatch(closeSideBar())}>
        <button>
          <Icon name="signOut" />
        </button>
        <span className={`${openSideBar ? null : "hidden"}`}>Sign Out</span>
      </div>
    </div>
  );
};

export default SideBarProfile;
