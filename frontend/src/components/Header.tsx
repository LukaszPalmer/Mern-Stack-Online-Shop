import searchIcon from '../assets/search.svg';
import userProfile from '../assets/user-avatar-light.svg';
import likedProductsIcon from '../assets/heart (1).svg';
import cartIcon from '../assets/shopping-cart-light.svg';
import snooLogo from '../assets/removedBG.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import IconButton from './IconButton.tsx';
import MobileMenu from './MobileMenu.tsx';
import HamburgerButton from './HamburgerButton.tsx';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return <header className="w-full grid grid-cols-12 gap-4 p-4">
        <nav aria-label='Hauptmenü' className="col-start-1 col-end-4 flex flex-row justify-around items-center">
            <HamburgerButton isOpen = {isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            <button className="flex flex-col justify-center cursor-pointer">
                <span className='sr-only'>Suche öffnen</span>
                <img src= {searchIcon} alt="Lupe zur Suche" />
            </button>
        </nav>
        <MobileMenu isOpen = {isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
        <section className="col-start-4 col-end-9 p-2 flex justify-center">
            <div className='block'>
                <a href="/" className='block' aria-label='Zur Startseite'>
                    <img className='block cursor-pointer' src={snooLogo} alt="Snoo Logo" width={100} height={100}/>
                </a>
            </div>
        </section>
        <nav aria-label='Benutzerinteraktionen' className="col-start-9 col-end-13 p-2 flex justify-around items-center">
            <Link to = "/profil">
                <IconButton icon= {userProfile} altText= "Benutzerprofil"/>
            </Link>
            <Link to= "/favoriten">
                <IconButton icon= {likedProductsIcon} altText='Gemerkte Produkte' />
            </Link>
            <Link to= "/warenkorb">
                <IconButton icon= {cartIcon} altText='Warenkorb' />
            </Link>
        </nav>
    </header>;
};

export default Header;
