import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';

export default function Sidenav() {
    const [open, setOpen] = useState(true)

    return (
        <nav>
            <div>
                <Bars3Icon className='text-gray-300 w-8 h-8 m-3 hover:text-white sm:hidden absolute right-0 top-0' onClick={() => setOpen(!open)}/>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-60 max-w-md">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                                <button
                                                    type="button"
                                                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>

                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll text-slate-200 bg-gray-800 shadow-xl">
                                            {/* <div className="px-4 sm:px-6">
                                            <Dialog.Title className="text-lg font-medium">Panel title</Dialog.Title>
                                            
                                        </div> */}

                                            <div className="relative flex-1">
                                                {SidebarData.map((item: any, index: any) => (
                                                    <li key={index} className='flex flex-row w-full border-b bg-grey-500 border-slate-500 hover:bg-gray-500'>
                                                        <Link className='flex flex-row' to={item.path}>
                                                            {item.icon}
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </nav>
    )
}