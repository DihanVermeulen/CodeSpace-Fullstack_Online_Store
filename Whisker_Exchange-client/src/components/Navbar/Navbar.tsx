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
            <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-300"
                enterFrom="-translate-y-10"
                enterTo="translate-y-0"
                leave="transform transition ease-in duration-300 sm:duration-300"
                leaveFrom="-translate-y-0"
                leaveTo="-translate-y-full"
            >


                <nav className='flex flex-row items-center fixed top-0 w-screen z-50'>
                    <img className='logo' src={logo} alt="logo" />
                    <ul className='flex flex-row ml-auto mr-32 hidden sm:flex'>
                        {NavbarData.map((item: any, index: any) => (
                            <li className='list-none ml-4'>
                                <Link className='flex flex-row cursor-pointer text-gray-400 hover:text-white' to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Sidenav />
                </nav>
            </Transition.Child>
        </Transition.Root>
    )
}