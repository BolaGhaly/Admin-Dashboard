import { useEffect } from "react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar/TopBar";
import { poppinsFont } from "../fonts";
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
    <main className={poppinsFont.className}>
      <TopBar />
      <SideBar />
      <section>{children}</section>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
