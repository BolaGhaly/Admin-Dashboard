import Icon, { sideBarTeams } from "../../utils/sideBarUtils";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
//import styles from "../styles/modules/sideBar.module.scss";

const SideBarTeams = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );

  return (
    <div>
      <h2 className={`${openSideBar ? null : "hidden"}`}>Teams</h2>
      {sideBarTeams.map((item, idx) => {
        return (
          <a href="#" key={idx}>
            <span className={`${openSideBar ? null : "hidden"}`}>{item}</span>
          </a>
        );
      })}

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
    </div>
  );
};

export default SideBarTeams;
