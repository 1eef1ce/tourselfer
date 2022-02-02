const Car = ({...props}) => {
    return (
        <svg width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             {...props}
        >
            <g clipPath="url(#clip0_553_5764)">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M22 19V12.3584L23.2969 11.9548C23.8243 11.7907 24.1187 11.2302 23.9546 10.7029C23.7905 10.1755 23.23 9.88106 22.7027 10.0452L21.957 10.2772C21.6 7.30432 19.0691 5 16 5H8.00004C4.9309 5 2.39998 7.3044 2.04311 10.2774L1.29691 10.0452C0.769573 9.88106 0.209047 10.1755 0.0449432 10.7029C-0.11916 11.2302 0.175302 11.7907 0.702643 11.9548L2.00004 12.3586V19H4.00004V17H20V19H22ZM7.99979 7C5.79065 7 3.99979 8.79086 3.99979 11V12C3.99979 12 3.99979 11 11.9998 11C19.9998 11 19.9998 12 19.9998 12V11C19.9998 8.79086 18.2089 7 15.9998 7H7.99979ZM3.99979 14C3.99979 13.4477 4.4475 13 4.99979 13H6.99979C7.55207 13 7.99979 13.4477 7.99979 14C7.99979 14.5523 7.55207 15 6.99979 15H4.99979C4.4475 15 3.99979 14.5523 3.99979 14ZM16.9998 13C16.4475 13 15.9998 13.4477 15.9998 14C15.9998 14.5523 16.4475 15 16.9998 15H18.9998C19.5521 15 19.9998 14.5523 19.9998 14C19.9998 13.4477 19.5521 13 18.9998 13H16.9998Z"
                      fill="black"/>
            </g>
            <defs>
                <clipPath id="clip0_553_5764">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};

export default Car;