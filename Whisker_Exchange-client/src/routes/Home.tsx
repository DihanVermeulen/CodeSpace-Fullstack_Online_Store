import { HeroSection } from "../components/HeroSection/HeroSection";
import cat_paw_hovering_card from '../assets/images/cat_paw_hovering_card.svg';

export const Home: React.FC = () => {
    return (
        <div className="w-screen">
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
                    <img src={cat_paw_hovering_card} className='w-96 lg:w-10/12 lg:h-6/12' />
                </div>
            </section>
        </div>
    )
}