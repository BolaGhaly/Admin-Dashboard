import Sidebar from "./Sidebar";
import Topbar from "./TopBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
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
