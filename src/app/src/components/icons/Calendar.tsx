const Calendar = ({...props}) => {
    return (
        <svg width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             {...props}
        >
            <path opacity="0.5" fillRule="evenodd" clipRule="evenodd"
                  d="M17 3C17 2.44772 16.5523 2 16 2C15.4477 2 15 2.44772 15 3V4H9V3C9 2.44772 8.55229 2 8 2C7.44772 2 7 2.44772 7 3V4.02714C6.91325 4.03193 6.82933 4.03756 6.74817 4.04419C6.18608 4.09012 5.66937 4.18868 5.18404 4.43597C4.43139 4.81947 3.81947 5.43139 3.43597 6.18404C3.18868 6.66937 3.09012 7.18608 3.04419 7.74817C2.99998 8.28937 2.99999 8.95373 3 9.7587L3 9.8V11V16.2L3 16.2413C2.99999 17.0463 2.99998 17.7106 3.04419 18.2518C3.09012 18.8139 3.18868 19.3306 3.43597 19.816C3.81947 20.5686 4.43139 21.1805 5.18404 21.564C5.66937 21.8113 6.18608 21.9099 6.74817 21.9558C7.28936 22 7.95372 22 8.75868 22H8.8H15.2H15.2413C16.0463 22 16.7106 22 17.2518 21.9558C17.8139 21.9099 18.3306 21.8113 18.816 21.564C19.5686 21.1805 20.1805 20.5686 20.564 19.816C20.8113 19.3306 20.9099 18.8139 20.9558 18.2518C21 17.7106 21 17.0463 21 16.2413V16.2V11V9.8V9.75868C21 8.95372 21 8.28936 20.9558 7.74817C20.9099 7.18608 20.8113 6.66937 20.564 6.18404C20.1805 5.43139 19.5686 4.81947 18.816 4.43597C18.3306 4.18868 17.8139 4.09012 17.2518 4.04419C17.1707 4.03756 17.0868 4.03193 17 4.02714V3ZM19 10V9.8C19 8.94342 18.9992 8.36113 18.9624 7.91104C18.9266 7.47262 18.8617 7.24842 18.782 7.09202C18.5903 6.71569 18.2843 6.40973 17.908 6.21799C17.7516 6.1383 17.5274 6.07337 17.089 6.03755C17.0599 6.03517 17.0302 6.03295 17 6.03086V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7V6H9V7C9 7.55228 8.55229 8 8 8C7.44772 8 7 7.55228 7 7V6.03086C6.96977 6.03295 6.94013 6.03517 6.91104 6.03755C6.47262 6.07337 6.24842 6.1383 6.09202 6.21799C5.7157 6.40973 5.40973 6.71569 5.21799 7.09202C5.1383 7.24842 5.07337 7.47262 5.03755 7.91104C5.00078 8.36113 5 8.94342 5 9.8V10H19ZM5 12H19V16.2C19 17.0566 18.9992 17.6389 18.9624 18.089C18.9266 18.5274 18.8617 18.7516 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.7516 19.8617 17.5274 19.9266 17.089 19.9624C16.6389 19.9992 16.0566 20 15.2 20H8.8C7.94342 20 7.36113 19.9992 6.91104 19.9624C6.47262 19.9266 6.24842 19.8617 6.09202 19.782C5.7157 19.5903 5.40973 19.2843 5.21799 18.908C5.1383 18.7516 5.07337 18.5274 5.03755 18.089C5.00078 17.6389 5 17.0566 5 16.2V12Z"
                  fill="#0D0D0D"/>
        </svg>
    );
};

export default Calendar;