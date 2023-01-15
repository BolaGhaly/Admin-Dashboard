import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import TopBarIcons from "./TopBarIcons";

const Topbar = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <nav
      className={`fixed top-0 left-0 pl-4 mw-minus-sideBar ml-16 ${
        darkMode
          ? "bg-neutral-900 shadow-[0_2px_4px_0px_rgba(220,220,220,0.4)]"
          : "bg-neutral-200 shadow-[0_2px_4px_0px_rgba(0,0,0,0.4)]"
      }`}
    >
      <TopBarIcons />
    </nav>
  );
};

export default Topbar;
