import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Topbar from "./TopBar";

const Layout = ({ children }) => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const darkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <main>
      <Topbar />
      <Sidebar />
      <section>{children}</section>
    </main>
  );
};

export default Layout;
