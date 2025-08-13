import { Outlet } from "react-router-dom";
import Header from "../components_temp/Header";

const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
