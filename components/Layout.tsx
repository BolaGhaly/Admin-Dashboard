import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Layout = ({ children }) => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );

  return (
    <main className="font-poppins">
      <Sidebar />
      <div
        className={`${openSideBar ? "cursor-pointer" : ""}`}
      >
        {children}
      </div>
    </main>
  );
};

export default Layout;
