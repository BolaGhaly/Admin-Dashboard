import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const darkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <main
      className={`font-poppins ${openSideBar ? "cursor-pointer" : ""} ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <Topbar />
      <Sidebar />
      <section
        className={`ml-16 mt-16 p-4 mh-minus-topBar ${
          darkMode ? "bg-dark-pr" : "bg-light-pr"
        } `}
      >
        {children}
      </section>
    </main>
  );
};

export default Layout;
