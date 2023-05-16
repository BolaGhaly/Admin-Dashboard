import Icon, { sideBarProfile } from "../../utils/sideBarUtils";
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
      {sideBarProfile.map((item, idx) => (
        <div key={idx} onClick={() => dispatch(closeSideBar())}>
          <button>
            <Icon name={item.icon} />
          </button>
          <span className={`${openSideBar ? null : "hidden"}`}>
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SideBarProfile;
