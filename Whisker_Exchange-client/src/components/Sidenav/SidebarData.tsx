import { HomeIcon, ShoppingBagIcon, ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

export const SidebarData:any = [
    {
        title: "Home",
        path: "/home",
        icon: <HomeIcon className='h-6 w-6 mx-5'/>,
        cName: "nav-text"
    },
    {
        title: "Products",
        path: "/products",
        icon: <ShoppingBagIcon className='h-6 w-6 mx-5' />,
        cName: "nav-text"
    },
    {
        title: "Login",
        path: "/login",
        icon: <ArrowRightOnRectangleIcon className='h-6 w-6 mx-5' />,
        cName: "nav-text"
    },
    {
        title: "Logout",
        path: "#",
        icon: <ArrowLeftOnRectangleIcon className='h-6 w-6 mx-5' />,
        cName: "nav-text"
    }
]