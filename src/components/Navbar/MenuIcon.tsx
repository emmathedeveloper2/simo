import React from 'react'

const MenuIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none" className='cursor-pointer'>
            <g filter="url(#filter0_i_35_565)">
                <path fillRule="evenodd" clipRule="evenodd" d="M9 4C9 2.93989 9.7144 1.6 10.7745 1.6H20C21.3255 1.6 22.4 2.67452 22.4 4V14C22.4 15.3255 21.3255 16.4 20 16.4H10.7745C9.7144 16.4 9 15.0601 9 14V4ZM5 0H20C22.2091 0 24 1.79086 24 4V14C24 16.2091 22.2091 18 20 18H5H4C3.86193 18 3.72549 17.993 3.59102 17.9793C1.574 17.7745 0 16.0711 0 14V4C0 1.79086 1.79086 0 4 0H5Z" fill="white" fillOpacity="0.03" />
            </g>
            <defs>
                <filter id="filter0_i_35_565" x="0" y="0" width="24" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="3.75" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_35_565" />
                </filter>
            </defs>
        </svg>
    )
}

export default MenuIcon
