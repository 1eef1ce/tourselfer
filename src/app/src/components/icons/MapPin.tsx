const MapPin = ({...props}) => {
    return (
        <svg width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             {...props}
        >
            <path
                d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                fill="white"/>
            <path
                d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                fill="url(#paint0_linear_553_4244)"/>
            <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                fill="white"/>
            <defs>
                <linearGradient id="paint0_linear_553_4244" x1="21" y1="23" x2="-0.64712" y2="5.51537"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0B97A0"/>
                    <stop offset="1" stopColor="#AEDEA6"/>
                </linearGradient>
            </defs>
        </svg>
    );
};

export default MapPin;