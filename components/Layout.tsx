import { useEffect } from "react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Topbar from "./TopBar";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      `${darkMode ? "dark" : "light"}`
    );
  }, [darkMode]);

  return (
    <main>
      <Topbar />
      <Sidebar />
      <section>{children}</section>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
