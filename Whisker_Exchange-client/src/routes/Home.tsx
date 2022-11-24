import cat_paw_hovering_card from '../assets/images/cat_paw_hovering_card.png';
import nft1 from '../assets/images/nft_1.png';
import nft2 from '../assets/images/nft_2.png';
import nft3 from '../assets/images/nft_3.png';
import { Button } from "@material-tailwind/react";
import secured from '../assets/icons/secured.svg';
import star from '../assets/icons/star.svg';
import transfer from '../assets/icons/transfer.svg';

export const Home: React.FC = () => {
    return (
        <div>
            <section className="h-screen flex flex-col sm:flex-row">
                <div className="flex flex-col items-center w-screen">
                    <div className="m-5 lg:m-16 m-md-12 font-poppins">
                        <div className="p-1 text-xs mb-2 flex items-center bg-gray-800/40 bg-gradient-to-r from-gray-700 w-64 rounded">
                            <div className="flex justify-center items-center bg-gray-500/40 rounded-full w-6 h-6"><b className='gradient-text text-base'>%</b></div>
                            <div className="ml-2"><b>20%</b> Discount for your <b>first purchase</b></div>
                        </div>
                        <h1 className="text-5xl lg:text-7xl">NEXT</h1>
                        <h1 className="gradient-text my-3 text-5xl lg:text-7xl">GENERATION</h1>
                        <h1 className="text-5xl lg:text-6xl">NFT EXCHANGING.</h1>
                    </div>
                </div>

                <div className="w-full flex flex-col items-end">
                    <img src={cat_paw_hovering_card} className='w-96 lg:w-9/12' />
                </div>
            </section>

            <section className='flex h-screen flex-col items-center justify-center'>
                <div className='mb-3 flex flex-col items-center'>
                    <h2 className='text-4xl lg:text-6xl text-center'>About our <b className='gradient-text'>platform</b></h2>
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
                <div className='ml-36'>
                    <h2 className='text-4xl lg:text-6xl'>What is an NFT?</h2>
                    <p className='text-gray-400 text-xl w-2/3 mb-5'>
                        Non-fungible-token <br />
                        An NFT is a anything digital that is unique and cannot be replaced. NFTs can be bought, sold or even traded.
                    </p>
                    <Button variant='gradient'>Get Started</Button>
                </div>
                <a href='https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq' target='_blank'>
                <div className='w-60 h-60 rounded-full border-2 flex flex-row justify-center items-center border-cyan-300 
                -translate-x-80 -translate-y-32 cursor-pointer'>Find Out More</div>
                </a>
            </section>
        </div>
    )
}