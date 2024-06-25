import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";
import Footer from "../components/Footer/Footer.tsx";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;