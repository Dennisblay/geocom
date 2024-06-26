import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";
import Footer from "../components/Footer/Footer.tsx";
import {ModeToggle} from "@/components/Theme/mode-toggle.tsx";


const Layout = () => {
    return (
        <div className='flex flex-col min-h-dvh  '>
            <Navbar/>
            <ModeToggle className='absolute top-2 right-14 z-[10000]  '/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;