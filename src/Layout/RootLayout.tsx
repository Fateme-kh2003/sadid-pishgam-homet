import { Outlet } from "react-router";
import Header from "../components/Ui/Header";
import Footer from "../components/Ui/Footer";
import CallButton from "../components/Ui/CallButton";
import ScrollToHash from "../components/Ui/ScrollToHash";

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollToHash />
      <Outlet />
      <CallButton />
      <Footer />
    </>
  );
};

export default Layout;