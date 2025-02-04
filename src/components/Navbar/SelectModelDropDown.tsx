import FancyBorderContainer from '../FancyBorderContainer'
import CheckIcon from './CheckIcon'
import { useAppStore, useCurrentModelId, useModels } from '../../state/AppState'

const SelectModelDropDown = () => {

  const models = useModels()

  const currentModelId = useCurrentModelId()

  const setCurrentModelId = useAppStore((state) => state.setCurrentModelId)

  return (
    <div className='w-[220px] h-[40px] relative z-0 cursor-pointer font-depature-mono group'>
        <FancyBorderContainer radialType='white' className='flex items-center justify-center gap-2 size-full'>
            <span>{currentModelId}</span>
            <small className='rotate-90'> {">"} </small>
        </FancyBorderContainer>

        <div className='w-full absolute bottom-0 left-0 translate-y-[120%] opacity-0 transition-all pointer-events-none group-hover:opacity-100 group-hover:translate-y-[110%] group-hover:pointer-events-auto'>

            {
                models.length > 1 &&
                models.map((model, index) => (
                    <div key={index} onClick={() => setCurrentModelId(model.name)} className='w-full h-[40px] relative z-0 cursor-pointer font-depature-mono group'>
                        <FancyBorderContainer showFancyBorder={false} radialType={index == 2 ? 'purple' : 'none'} className='flex items-center justify-between gap-2 size-full px-2'>
                            <span>{model.name}</span>
                            {
                                index === 2 &&
                                <CheckIcon />
                            }
                        </FancyBorderContainer>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SelectModelDropDown