import FancyBorderContainer from '../FancyBorderContainer'
import CheckIcon from './CheckIcon'
import { useAppStore, useCurrentModelId, useModels } from '../../state/AppState'
import ChevronDownIcon from '../ChevronDownIcon'
import { useState } from 'react'

const SelectModelDropDown = () => {

    const [dropDownOpen, setDropDownOpen] = useState(false)

    const models = useModels()

    const currentModelId = useCurrentModelId()

    const setCurrentModelId = useAppStore((state) => state.setCurrentModelId)

    return (
        <div className='w-[220px] h-[40px] relative z-0 cursor-pointer font-depature-mono group'>
            <FancyBorderContainer
                onClick={() => setDropDownOpen(!dropDownOpen)}
                radialType='white' className='flex items-center justify-center gap-2 size-full'>
                <span className='shadow-text'>{currentModelId}</span>
                <ChevronDownIcon />
            </FancyBorderContainer>

            {
                models.length > 1 && dropDownOpen &&

                <div className='w-full absolute bottom-0 left-0 translate-y-[110%]'>
                    {models.map((model, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setCurrentModelId(model.name)
                            setDropDownOpen(false)
                        }}
                        className='w-full h-[40px] relative z-0 cursor-pointer font-depature-mono group'>
                        <FancyBorderContainer showFancyBorder={false} radialType={currentModelId == model.name ? 'purple' : 'none'} className='flex items-center justify-center gap-2 size-full px-2'>
                            <span className={`${currentModelId == model.name ? 'shadow-text' : ''}`}>{model.name}</span>
                            {
                                currentModelId == model.name &&
                                <CheckIcon />
                            }
                        </FancyBorderContainer>
                    </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default SelectModelDropDown