const Plus = ({...props}) => {
    return (
        <svg width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             {...props}
        >
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44771 12.5523 4 12 4C11.4477 4 11 4.44771 11 5L11 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11L11 19Z"
                  fill="white"/>
        </svg>
    );
};

export default Plus;