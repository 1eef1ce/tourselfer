const MapPin = ({gradient = false,...props}) => {
    if (gradient) {
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
    }
    return (
        <svg width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M18 10.1C18 12.3341 16.6244 14.851 14.8421 16.9779C13.9827 18.0034 13.1018 18.8502 12.4023 19.425C12.2547 19.5462 12.1201 19.6513 12 19.7407C11.8799 19.6513 11.7453 19.5462 11.5977 19.425C10.8982 18.8502 10.0173 18.0034 9.15793 16.9779C7.37559 14.851 6 12.3341 6 10.1C6 6.70757 8.70964 4 12 4C15.2904 4 18 6.70757 18 10.1ZM20 10.1C20 16 13 22 12 22C11 22 4 16 4 10.1C4 5.62649 7.58172 2 12 2C16.4183 2 20 5.62649 20 10.1ZM10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10ZM12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6Z"
                  fill="white"/>
        </svg>
    );
};

export default MapPin;