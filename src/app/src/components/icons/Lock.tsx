const Lock = ({locked,...props}) => {
    if (locked) {
        return (
            <svg width="32"
                 height="32"
                 viewBox="0 0 32 32"
                 fill="none"
                 {...props}
            >
                <path d="M22 13V10.8644C22 7.91524 21.3778 3.99998 16 3.99998C10.6222 3.99998 10 7.91524 10 10.8644V13"
                      stroke="#0D0D0D" strokeWidth="2"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M4.12464 13.7055C3 15.2733 3 17.0156 3 20.5C3 23.9844 3 25.7267 4.12464 27.2945C4.4118 27.6948 4.91009 28.2148 5.29779 28.5188C6.81615 29.7094 8.35802 29.7752 11.4418 29.907C12.7884 29.9646 14.3056 30 16 30C17.6944 30 19.2116 29.9646 20.5582 29.907C23.642 29.7752 25.1839 29.7094 26.7022 28.5188C27.0899 28.2148 27.5882 27.6948 27.8754 27.2945C29 25.7267 29 23.9844 29 20.5C29 17.0156 29 15.2733 27.8754 13.7055C27.5882 13.3052 27.0899 12.7852 26.7022 12.4812C25.1839 11.2906 23.642 11.2248 20.5582 11.093C19.2116 11.0354 17.6944 11 16 11C14.3056 11 12.7884 11.0354 11.4418 11.093C8.35802 11.2248 6.81615 11.2906 5.29779 12.4812C4.91009 12.7852 4.4118 13.3052 4.12464 13.7055ZM16 17C14.8954 17 14 17.8954 14 19V22C14 23.1046 14.8954 24 16 24C17.1046 24 18 23.1046 18 22V19C18 17.8954 17.1046 17 16 17Z"
                      fill="#0D0D0D"/>
            </svg>
        );
    }

    return (
        <svg width="32"
             height="32"
             viewBox="0 0 32 32"
             fill="none"
             {...props}
        >
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M4.12464 13.7055C3 15.2733 3 17.0156 3 20.5C3 23.9844 3 25.7267 4.12464 27.2945C4.4118 27.6948 4.91009 28.2148 5.29779 28.5188C6.81615 29.7094 8.35802 29.7752 11.4418 29.907C12.7884 29.9646 14.3056 30 16 30C17.6944 30 19.2116 29.9646 20.5582 29.907C23.642 29.7752 25.1839 29.7094 26.7022 28.5188C27.0899 28.2148 27.5882 27.6948 27.8754 27.2945C29 25.7267 29 23.9844 29 20.5C29 17.0156 29 15.2733 27.8754 13.7055C27.5882 13.3052 27.0899 12.7852 26.7022 12.4812C25.1839 11.2906 23.642 11.2248 20.5582 11.093C19.2116 11.0354 17.6944 11 16 11C14.3056 11 12.7884 11.0354 11.4418 11.093C8.35802 11.2248 6.81615 11.2906 5.29779 12.4812C4.91009 12.7852 4.4118 13.3052 4.12464 13.7055ZM16 17C14.8954 17 14 17.8954 14 19V22C14 23.1046 14.8954 24 16 24C17.1046 24 18 23.1046 18 22V19C18 17.8954 17.1046 17 16 17Z"
                  fill="#0D0D0D"/>
            <path
                d="M14.1461 4.06105L14.2884 5.05087L14.2884 5.05087L14.1461 4.06105ZM9.06107 9.14609L10.0509 9.28841L9.06107 9.14609ZM16.0909 4.99998H18V2.99998H16.0909V4.99998ZM10 13V11.0909H8V13H10ZM18 4.99998C19.6568 4.99998 21 6.34314 21 8H23C23 5.23857 20.7614 2.99998 18 2.99998V4.99998ZM16.0909 2.99998C15.1123 2.99998 14.5172 2.99742 14.0038 3.07123L14.2884 5.05087C14.6245 5.00255 15.0428 4.99998 16.0909 4.99998V2.99998ZM10 11.0909C10 10.0428 10.0026 9.62453 10.0509 9.28841L8.07125 9.00378C7.99743 9.51718 8 10.1122 8 11.0909H10ZM14.0038 3.07123C10.929 3.51332 8.51334 5.92896 8.07125 9.00378L10.0509 9.28841C10.3667 7.09211 12.0921 5.36665 14.2884 5.05087L14.0038 3.07123Z"
                fill="#0D0D0D"/>
        </svg>
    );
};

export default Lock;