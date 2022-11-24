import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Sidenav from '../Sidenav/Sidenav';
import { NavbarData } from './NavbarData';
import { Transition } from '@headlessui/react';
import { useEffect, useState, Fragment } from 'react';

export const Navbar: React.FC = () => {
    const [show, setShow] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) {
            setShow(false)
        } else {
            setShow(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <Transition.Root show={show}>

            <nav className='flex flex-row items-center fixed top-0 w-screen'>
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
        </Transition.Root>
    )
}