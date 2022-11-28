import cat_paw_hovering_card from '../assets/images/cat_paw_hovering_card.png';
import nft1 from '../assets/images/nft_1.png';
import nft2 from '../assets/images/nft_2.png';
import nft3 from '../assets/images/nft_3.png';
import { Button } from "@material-tailwind/react";
import secured from '../assets/icons/secured.svg';
import star from '../assets/icons/star.svg';
import transfer from '../assets/icons/transfer.svg';
import '../utils/utils.css';

export const Home: React.FC = () => {
    return (
        <div className='mt-20 overflow-x-hidden'>
            <section className="flex flex-col flex-1 md:flex-row overflow-x-none">
                <div className="flex flex-col w-screen z-20">
                    <div className="lg:m-16 md:m-12 m-10 font-poppins">
                        <div className="p-1 text-xs mb-2 flex items-center bg-gray-800/40 bg-gradient-to-r from-gray-700 w-64 rounded">
                            <div className="flex justify-center items-center bg-gray-500/40 rounded-full w-6 h-6"><b className='gradient-text text-base'>%</b></div>
                            <div className="ml-2"><b>20%</b> Discount for your <b>first purchase</b></div>
                        </div>
                        <h1 className="text-4xl lg:text-7xl">NEXT</h1>
                        <h1 className="gradient-text my-3 text-4xl lg:text-7xl">GENERATION</h1>
                        <h1 className="text-4xl lg:text-7xl">NFT EXCHANGING.</h1>
                    </div>
                </div>

                <div className="flex flex-row justify-end md:my-0 my-10">
                    <div className='absolute top-0 w-2/3 h-1/3 z-0 pink-gradient' />
                    <div className='absolute rounded-full w-full h-1/2 bottom-40 z-[1] white-gradient' />
                    <div className='absolute w-1/2 h-1/2 right-20 bottom-32 z-0 blue-gradient' />
                    <img src={cat_paw_hovering_card} className='relative float-right w-[400px] h-[520px] lg:w-full lg:h-full z-20' />
                </div>
            </section>

            <section className='flex h-screen flex-col items-center justify-center'>
                <div className='mb-3 flex flex-col items-center'>
                    <h2 className='text-4xl lg:text-6xl text-center z-30'>About our <b className='gradient-text'>platform</b></h2>
                    <p className='text-gray-400 text-center text-xl lg:text-xl w-9/12 lg:w-1/3'>This platform was heavily inspired by the love
                        that the community has for cats, so we decided
                        to put that love into something we also love.</p>
                </div>
                <article className='flex flex-row justify-evenly'>
                    <img className='w-1/4' src={nft1} />
                    <img className='w-1/4' src={nft2} />
                    <img className='w-1/4' src={nft3} />
                </article>
            </section>

            <section className='h-screen flex flex-row items-center'>
                <div className='absolute w-1/3 h-1/3 left-0 z-0 pink-gradient' />
                <div className='absolute rounded-full w-full h-1/2 z-[1] white-gradient' />
                <div className='absolute w-1/2 h-1/2 z-0 blue-gradient' />
                <div className='ml-20 lg:ml-36 z-20'>
                    <h2 className='text-3xl lg:text-6xl'>What is an NFT?</h2>
                    <p className='text-gray-400 text-sm lg:text-xl lg:w-2/3 mb-5'>
                        Non-fungible-token <br />
                        An NFT is a anything digital that is unique and cannot be replaced. NFTs can be bought, sold or even traded.
                    </p>
                    <Button variant='gradient'>Get Started</Button>
                </div>

                <a href='https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq' target='_blank' className='z-[3]'>
                    <div className='lg:w-60 lg:h-60 w-32 h-32 rounded-full border-2 flex flex-row justify-center items-center border-cyan-300 
                lg:-translate-x-74 lg:-translate-y-32 md:-translate-x-32 md:-translate-y-24 -translate-y-24 -translate-x-16 cursor-pointer'>Find Out More</div>
                </a>
            </section>

            <section className='h-screen flex flex-col items-center justify-center'>
                <article className='flex flex-row hover:bg-gray-700/50 items-center p-3 rounded w-2/3 lg:w-1/2'>
                    <img src={secured} alt='secured' className='lg:w-16 lg:h-16 pr-3' />
                    <div className='flex flex-col justify-start'>
                        <h3 className='lg:text-2xl'>100% Secured</h3>
                        <p className='text-gray-400 text-lg'>All of your payments are handled securely
                            so that you don’t have to worry!</p>
                    </div>
                </article>

                <article className='flex flex-row hover:bg-gray-700/50 items-center p-3 rounded w-2/3 lg:w-1/2'>
                    <img src={star} alt='star' className='lg:w-16 lg:h-16 pr-3' />
                    <div className='flex flex-col justify-start'>
                        <h3 className='lg:text-2xl'>Rewards</h3>
                        <p className='text-gray-400 text-lg'>
                            We want you to have the best, so we offer rewards
                            upon every successful purchase
                        </p>
                    </div>
                </article>

                <article className='flex flex-row hover:bg-gray-700/50 items-center p-3 rounded w-2/3 lg:w-1/2'>
                    <img src={transfer} alt='transfer' className='lg:w-16 lg:h-16 pr-3' />
                    <div className='flex flex-col justify-start'>
                        <h3 className='lg:text-2xl'>Balance Transfer</h3>
                        <p className='text-gray-400 text-lg'>
                            Our payment systems work with etherium, so
                            that transfers can be as fast and efficient as possible
                        </p>
                    </div>
                </article>
            </section>

            <section className='flex flex-row justify-center items-center'>
                <article className='flex flex-col items-center w-2/3 lg:w-1/3 bg-gray-700/50 p-4 lg:p-12 rounded'>
                    <h2 className='text-2xl lg:text-4xl'>Try our service now!</h2>
                    <p className='text-md lg:text-lg text-gray-400 text-center mb-3 lg:mb-6'>
                        We promise to provide the best service and customer
                        support we can so that you don’t have
                        to ever worry about a thing!
                    </p>
                    <Button variant='gradient'>Sign up meow</Button>
                </article>
            </section>
        </div>
    )
}