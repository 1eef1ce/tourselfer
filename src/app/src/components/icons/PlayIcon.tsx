const PlayIcon = ({...props}) => {
    return (
        <svg width="48" height="50" viewBox="0 0 48 50" fill="none" {...props}>
            <g filter="url(#filter0_di_2594_26470)">
                <path
                    d="M42 20.5086C44.6667 22.0601 44.6667 25.9387 42 27.4902L18 41.4533C15.3333 43.0048 12 41.0655 12 37.9626L12 10.0362C12 6.9333 15.3333 4.99397 18 6.54543L42 20.5086Z"
                    fill="white"/>
            </g>
            <defs>
                <filter id="filter0_di_2594_26470" x="12" y="5.99939" width="32" height="44"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feMorphology radius="20" operator="erode" in="SourceAlpha" result="effect1_dropShadow_2594_26470"/>
                    <feOffset dy="8"/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0375 0 0 0 0 0.125781 0 0 0 0 0.1625 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2594_26470"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2594_26470" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_innerShadow_2594_26470"/>
                    <feOffset/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2594_26470"/>
                </filter>
            </defs>
        </svg>
    );
};

export default PlayIcon;