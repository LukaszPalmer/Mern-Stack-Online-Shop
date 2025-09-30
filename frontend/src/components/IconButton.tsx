interface IconButtonProps {
    icon: string;
    altText: string;
}


const IconButton = ({icon, altText}: IconButtonProps) => {
    return <button className="cursor-pointer block">
        <img src={icon} alt={altText} />
    </button>;
};

export default IconButton;
