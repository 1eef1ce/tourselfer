const CheckRounded = ({...props}) => {
    return (
        <svg width="25"
             height="24"
             viewBox="0 0 25 24"
             fill="none"
             {...props}
        >
            <path
                d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                fill="url(#paint0_linear_2233_22960)"/>
            <path d="M8.5 13L11.1667 15.5L16.5 9.5" stroke="white" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <defs>
                <linearGradient id="paint0_linear_2233_22960" x1="22.5" y1="22" x2="2.37204" y2="2.12962"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0B97A0"/>
                    <stop offset="1" stopColor="#AEDEA6"/>
                </linearGradient>
            </defs>
        </svg>
    );
};

export default CheckRounded;