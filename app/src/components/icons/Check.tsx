const Check = ({...props}) => {
    return (
        <svg width="18"
             height="24"
             viewBox="0 0 18 24"
             fill="none"
             {...props}
        >
            <path d="M16.5 7L6 17L1.5 12" stroke="white" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    );
};

export default Check;