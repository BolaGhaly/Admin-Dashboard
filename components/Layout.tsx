import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="font-poppins">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
