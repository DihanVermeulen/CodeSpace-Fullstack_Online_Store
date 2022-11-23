import { Navbar } from "../components/Navbar/Navbar"
import Sidenav from "../components/Sidenav/Sidenav"

export const Home: React.FC = () => {
    return (
        <div className="h-screen w-screen bg-grey-400">
            <Sidenav />
            <Navbar />
            <h1 className="text-3xl font-bold underline">Home</h1>
        </div>
    )
}