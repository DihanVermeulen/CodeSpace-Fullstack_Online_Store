import logo from '../../assets/logo.png';
import Sidenav from '../Sidenav/Sidenav';

export const Navbar: React.FC = () => {
    return (
        <nav>
            <img className='logo' src={logo} alt="logo" />
            <Sidenav />
        </nav>
    )
}