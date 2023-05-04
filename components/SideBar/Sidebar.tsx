import useOnclickOutside from "react-cool-onclickoutside";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { openSideBarOff } from "../../store/slices/sideBar";
import styles from "./sideBar.module.scss";
import CompanyLogo from "./CompanyLogo";
import SideBarMenu from "./SideBarMenu";

const Sidebar = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const dispatch = useDispatch();
  const sideBarRef = useOnclickOutside(() => dispatch(openSideBarOff()));

  return (
    <nav
      className={`${styles.sideNavBar} ${openSideBar ? "w-52 shown" : "w-16"}`}
      ref={sideBarRef}
    >
      <CompanyLogo />
      <SideBarMenu />
    </nav>
  );
};

export default Sidebar;
