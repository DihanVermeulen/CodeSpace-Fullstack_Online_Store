import { useEffect, useState } from "react";
import data from '../data.json';

export const Products = () => {
    const [loaded, setLoaded] = useState(false);

    setTimeout(() => {
        setLoaded(true);
    }, 2000);

    useEffect(() => {
        console.log(data);
    }, [])

    if (loaded) {
        return (
            <div className="flex flex-col justify-center items-center mt-16">
                <div className='absolute top-0 w-2/3 h-1/3 z-0 pink-gradient' />
                <div className='absolute rounded-full w-1/2 h-5/6 bottom-40 z-[1] white-gradient' />
                <div className='absolute w-1/2 h-1/2 right-0 bottom-32 z-0 blue-gradient' />
                <h1 className="text-2xl lg:text-3xl font-poppins z-[2]">Explore. Collect. Sell.</h1>
                <section role='status' className="w-full mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 z-[2]">
                    {data.map((item, key) => (
                        <article className="w-full rounded h-80 mb-8">
                            <img src="https://picsum.photos/1080/1350" className="flex justify-center items-center w-full h-3/4 rounded-t bg-gray-300 dark:bg-gray-700" />
                            <div className="h-1/3 bg-white rounded-b p-4" >
                                <h3 className="text-black mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.price} ETH</p>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col justify-center items-center mt-16">
                <div className='absolute top-0 w-2/3 h-1/3 z-0 pink-gradient' />
                <div className='absolute rounded-full w-1/2 h-5/6 bottom-40 z-[1] white-gradient' />
                <div className='absolute w-1/2 h-1/2 right-0 bottom-32 z-0 blue-gradient' />
                <h1 className="text-2xl lg:text-3xl">Explore. Collect. Sell.</h1>
                <section role='status' className="w-full mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 z-[2] animate-pulse p-4">
                    <article className="w-full rounded h-80 mb-8">
                        <div className="flex justify-center items-center h-3/4 rounded-t bg-gray-300 dark:bg-gray-700" />
                        <div className="h-1/3 bg-white rounded-b p-4">
                        <div className="w-1/3 h-[20px] bg-gray-300 rounded mb-2" />
                        <div className="w-1/4 h-[20px] bg-gray-300 rounded" />
                    </div>
                </article>
                <article className="w-full rounded h-80 mb-8">
                    <div className="flex justify-center items-center h-3/4 rounded-t bg-gray-300 dark:bg-gray-700" />
                    <div className="h-1/3 bg-white rounded-b" />
                </article>
                <article className="w-full rounded h-80 mb-8">
                    <div className="flex justify-center items-center h-3/4 rounded-t bg-gray-300 dark:bg-gray-700" />
                    <div className="h-1/3 bg-white rounded-b" />
                </article>
                <article className="w-full rounded h-80 mb-8">
                    <div className="flex justify-center items-center h-3/4 rounded-t bg-gray-300 dark:bg-gray-700" />
                    <div className="h-1/3 bg-white rounded-b" />
                </article>
                <article className="w-full rounded h-80 mb-8">
                    <div className="flex justify-center items-center h-3/4 rounded-t bg-gray-300 dark:bg-gray-700" />
                    <div className="h-1/3 bg-white rounded-b" />
                </article>
                <article className="w-full rounded h-80 mb-8">
                    <div className="flex justify-center items-center h-3/4 rounded-t bg-gray-300 dark:bg-gray-700" />
                    <div className="h-1/3 bg-white rounded-b" />
                </article>
                <article className="w-full rounded h-80 mb-8">
                    <div className="flex justify-center items-center h-3/4 rounded-t bg-gray-300 dark:bg-gray-700" />
                    <div className="h-1/3 bg-white rounded-b" />
                </article>
                <article className="w-full rounded h-80 mb-8">
                    <div className="flex justify-center items-center h-3/4 rounded-t bg-gray-300 dark:bg-gray-700" />
                    <div className="h-1/3 bg-white rounded-b" />
                </article>
            </section>
            </div >
        )
    }
}