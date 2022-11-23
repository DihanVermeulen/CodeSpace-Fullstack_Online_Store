import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar/Navbar"

export const Root: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}