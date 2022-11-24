import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Sidenav from '../Sidenav/Sidenav';
import { NavbarData } from './NavbarData';

export const Navbar: React.FC = () => {
    return (
        <nav className='flex flex-row items-center'>
            <img className='logo' src={logo} alt="logo" />
            <ul className='flex flex-row ml-auto mr-5 hidden sm:flex'>
                {NavbarData.map((item: any, index: any) => (
                    <li className='list-none'>
                        <Link className='flex flex-row cursor-pointer' to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <Sidenav />
        </nav>
    )
}