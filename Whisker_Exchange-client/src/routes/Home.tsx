import { Navbar } from "../components/Navbar/Navbar"

export const Home: React.FC = () => {
    return (
        <div className="h-screen w-screen bg-grey-400">
            <Navbar />
            <h1 className="text-3xl font-bold underline">Home</h1>
        </div>
    )
}