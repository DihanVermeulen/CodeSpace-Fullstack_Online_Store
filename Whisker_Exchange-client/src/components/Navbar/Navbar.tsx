import logo from '../../assets/logo.png';

export const Navbar: React.FC = () => {
    return (
        <nav>
            <img className='logo' src={logo} alt="logo" />
        </nav>
    )
}