import { HomeIcon, ShoppingBagIcon, ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export const NavbarData:any = [
    {
        title: "Home",
        path: "/home",
        icon: <HomeIcon className='h-6 w-6 mx-3'/>,
    },
    {
        title: "Products",
        path: "/products",
        icon: <ShoppingBagIcon className='h-6 w-6 mx-3' />,
    },
    {
        title: "Login",
        path: "/login",
        icon: <ArrowRightOnRectangleIcon className='h-6 w-6 mx-3' />,
    },
    {
        title: "Logout",
        path: "#",
        icon: <ArrowLeftOnRectangleIcon className='h-6 w-6 mx-3' />,
    },
    {
        title: "Cart",
        path: "/shopping-cart",
        icon: <ShoppingCartIcon className='h-6 w-6 mx-3' />,
    }
]