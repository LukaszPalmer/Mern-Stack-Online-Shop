import { NavLink } from 'react-router-dom';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen , onClose}: MobileMenuProps) => {
    return (
        <div
            className={`fixed top-20 left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-20 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <nav className="p-4">
                <ul className="space-y-4 divide-y divide-gray-200">
                    <li><NavLink to="/" onClick={onClose} className="text-s">Startseite</NavLink></li>
                    <li><NavLink to="/produkte" onClick={onClose} className="text-s">Produkte</NavLink></li>
                    <li><NavLink to="/ueber-uns" onClick={onClose} className="text-s">Über uns</NavLink></li>
                    <li><NavLink to="/kontakt" onClick={onClose} className="text-s">Kontakt</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default MobileMenu;