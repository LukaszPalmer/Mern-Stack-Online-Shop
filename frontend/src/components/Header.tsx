import searchIcon from '../assets/search.svg';
import userProfile from '../assets/user-avatar-light.svg';
import likedProductsIcon from '../assets/heart (1).svg';
import cartIcon from '../assets/shopping-cart-light.svg';
import snooLogo from '../assets/removedBG.png';

const Header = () => {
    return <header className="w-full grid grid-cols-12 gap-4 p-4">
        <section className="col-start-1 col-end-4 flex flex-row justify-around">
            <div className="flex flex-col justify-center">
                <button className="flex flex-col space-y-1.5 items-start cursor-pointer">
                    <span className='block w-5 h-px bg-black'></span>
                    <span className='block w-7 h-px bg-black'></span>
                    <span className='block w-5 h-px bg-black'></span>
                </button>
            </div>
            <div className="flex flex-col justify-center cursor-pointer">
                <img className='block' src = {searchIcon} alt="Search Icon"/>
            </div>
        </section>
        <section className="col-start-4 col-end-9 p-2 flex justify-center">
            <div className='block'>
                <img className='block cursor-pointer' src={snooLogo} alt="Snoo Logo" width={100} height={100}/>
            </div>
        </section>
        <section className="col-start-9 col-end-13 p-2 flex justify-around items-center">
            <div>
                <button className='block cursor-pointer'>
                    <img src={userProfile} alt="User Profile Icon"/>
                </button>
            </div>
            <div>
                <button className='block cursor-pointer'>
                    <img src={likedProductsIcon} alt="Liked Products" />
                </button>
            </div>
            <div>
                <button className='block cursor-pointer'>
                    <img src={cartIcon} alt="Shopping Cart" />
                </button>
            </div>
        </section>
    </header>;
};

export default Header;
