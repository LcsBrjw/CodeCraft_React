import { Header } from "./components/Header/Header";
// import { Footer } from "./components/Footer/Footer";
import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        {/* <Footer /> */}
    </div>
  );
};