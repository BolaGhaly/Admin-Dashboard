import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

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
      <Sidebar />
      <section
        className={`ml-[60px] p-4 min-h-screen transition-colors duration-500 ${
          darkMode ? "bg-neutral-900" : "bg-neutral-50"
        } `}
      >
        {children}
      </section>
    </main>
  );
};

export default Layout;
