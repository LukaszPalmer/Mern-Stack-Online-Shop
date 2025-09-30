// src/components/HamburgerButton.tsx

interface HamburgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
    const lineClasses =
        "absolute block h-px w-7 bg-black transform transition-all duration-300 ease-in-out";

    return (
        <button
            onClick={onClick}
            className="relative w-8 h-8 cursor-pointer">
            <span className="sr-only">
                {isOpen ? "Menü schließen" : "Menü öffnen"}
            </span>
            <span
                className={`${lineClasses} 
            ${isOpen ? "rotate-45 top-1/2" : "top-[11px]"} w-6`}></span>
            <span
                className={`${lineClasses} top-1/2 
            ${isOpen ? "opacity-0" : ""}`}></span>
            <span
                className={`${lineClasses} 
            ${isOpen ? "-rotate-45 top-1/2" : "top-[21px]"} w-6`}></span>
        </button>
    );
};

export default HamburgerButton;
