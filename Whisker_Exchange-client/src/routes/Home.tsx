import cat_paw_hovering_card from '../assets/images/cat_paw_hovering_card.svg';
import nft1 from '../assets/images/nft_1.png';
import nft2 from '../assets/images/nft_2.png';
import nft3 from '../assets/images/nft_3.png';

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

            <section className='flex flex-col items-center'>
                <div className='w-9/12 lg:w-1/3 mb-3'>
                    <h2 className='text-4xl lg:text-6xl text-center'>About our <b className='gradient-text'>platform</b></h2>
                    <p className='text-gray-500 text-center lg:text-xl'>This platform was heavily inspired by the love
                        that the community has for cats, so we decided
                        to put that love into something we also love.</p>
                </div>
                <article className='flex flex-row justify-evenly'>
                   <img className='w-1/4' src={nft1} />
                   <img className='w-1/4' src={nft2} />
                   <img className='w-1/4' src={nft3} />
                </article>
            </section>
        </div>
    )
}