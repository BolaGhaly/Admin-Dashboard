import { RootState } from "../../store/store";
import styles from "./sideBar.module.scss";
import Icon, { sideBarTeams } from "../../utils/sideBarUtils";
import { useSelector, useDispatch } from "react-redux";
import { closeSideBar } from "../../store/slices/sideBar";

const SideBarTeams = () => {
  const dispatch = useDispatch();
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );


  return (
    <div className={styles.sideBarTeams}>
      {sideBarTeams.map((item, idx) => (
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

export default SideBarTeams;
