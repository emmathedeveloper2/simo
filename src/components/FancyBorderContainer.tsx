type FancyBorderContainerProps = {
    children?: any,
    className?: string,
    showFancyBorder?: boolean,
    radialType?: 'white' | 'purple' | 'none',
    onClick?: () => void
}

const FancyBorderContainer = ({ children, className, showFancyBorder = true, radialType = 'none' , onClick }: FancyBorderContainerProps) => {
    return (
        <div onClick={onClick} className={`relative z-0 ${className}`}>

            {
                showFancyBorder &&

                <>
                    <svg id="top-right" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" className="absolute top-0 right-0 pointer-events-none">
                        <g filter="url(#filter0_bi_35_495)">
                            <path d="M0 1H8V9" stroke="white" strokeOpacity="0.03" strokeWidth="2" />
                        </g>
                        <defs>
                            <filter id="filter0_bi_35_495" x="-10" y="-10" width="29" height="29" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_35_495" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_35_495" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-1" dy="1" />
                                <feGaussianBlur stdDeviation="1.1" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_35_495" />
                            </filter>
                        </defs>
                    </svg>

                    <svg id="bottom-right" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" className="absolute bottom-0 right-0 pointer-events-none">
                        <g filter="url(#filter0_bi_35_498)">
                            <path d="M0 8H8V1.78814e-07" stroke="white" strokeOpacity="0.03" strokeWidth="2" />
                        </g>
                        <defs>
                            <filter id="filter0_bi_35_498" x="-10" y="-10" width="29" height="29" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_35_498" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_35_498" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-1" dy="1" />
                                <feGaussianBlur stdDeviation="1.1" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_35_498" />
                            </filter>
                        </defs>
                    </svg>

                    <svg id="bottom-left" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" className="absolute bottom-0 left-0 pointer-events-none">
                        <g filter="url(#filter0_bi_35_497)">
                            <path d="M9 8H1V1.78814e-07" stroke="white" strokeOpacity="0.03" strokeWidth="2" />
                        </g>
                        <defs>
                            <filter id="filter0_bi_35_497" x="-10" y="-10" width="29" height="29" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_35_497" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_35_497" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-1" dy="1" />
                                <feGaussianBlur stdDeviation="1.1" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_35_497" />
                            </filter>
                        </defs>
                    </svg>

                    <svg id="top-left" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" className="absolute top-0 left-0 pointer-events-none">
                        <g filter="url(#filter0_bi_35_494)">
                            <path d="M9 1H1V9" stroke="white" strokeOpacity="0.03" strokeWidth="2" />
                        </g>
                        <defs>
                            <filter id="filter0_bi_35_494" x="-10" y="-10" width="29" height="29" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_35_494" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_35_494" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-1" dy="1" />
                                <feGaussianBlur stdDeviation="1.1" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_35_494" />
                            </filter>
                        </defs>
                    </svg>
                </>
            }

            {
                radialType === 'purple' &&

                <div className="w-full h-full bg-[#020010]/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shadow-[0px_-1px_13px_0px_rgba(0,0,0,0.25)] shadow-[inset_0px_0px_31.600000381469727px_0px_rgba(255,255,255,0.10)] shadow-[inset_0px_0px_40px_0px_rgba(64,45,165,0.20)] backdrop-blur-[20px] absolute top-0 left-0 -z-10" />
            }

            {
                radialType === 'white' &&
                <div className="size-full absolute -z-10 top-0 left-0">
                    <div className="size-full left-0 top-0 absolute bg-white/5 shadow-[inset_0px_0px_25.600000381469727px_0px_rgba(255,255,255,0.10)] backdrop-blur-[20px]" />
                    <div className="w-[189px] h-[38px] left-[1px] top-0 absolute">
                        <div className="w-[189px] h-[4.75px] left-0 top-0 absolute">
                        </div>
                        <div className="w-[189px] h-[4.75px] left-0 top-[38px] absolute">
                        </div>
                    </div>
                </div>
            }

            {
                radialType === 'none' &&
                <div className="size-full bg-black/5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shadow-[inset_0px_0px_59px_0px_rgba(255,255,255,0.05)] backdrop-blur-[20px] absolute top-0 left-0 -z-10" />
            }


            {children}
        </div>
    )
}

export default FancyBorderContainer
