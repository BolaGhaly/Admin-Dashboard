import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Layout = ({ children }) => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const sideBar = useSelector((state: RootState) => state.openSideBar.value);

  return (
    <div className="font-poppins">
      <Sidebar />
      <main
        className={`${sideBar ? "cursor-pointer " : ""}${
          darkMode ? "dark" : ""
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
