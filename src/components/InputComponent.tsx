import { useState } from 'react'
import FancyBorderContainer from './FancyBorderContainer'
import { useAppStore } from '../state/AppState'


function InputComponent() {

  const [message, setMessage] = useState('')

  const sendMessage = useAppStore((state) => state.sendMessage)

  const handleSubmit = async () => {

    if (!message.trim()) return

    sendMessage(message)

    setMessage('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      handleSubmit()

      e.currentTarget.textContent = ''
    }
  }

  return (
    <FancyBorderContainer
      className='w-full min-h-[50px] md:w-[600px] relative z-0 bg-[#ffffff08] backdrop-blur-[10px]'>

        <div className='size-full'>
          {
            message.length < 1 &&
            <div className='absolute top-0 left-0 -z-10 flex text-white/50 px-4 pt-2 size-full pointer-events-none'>
              <p>
                Message
                <span className='text-white shadow-text animate-pulse ml-1'>
                  SIMO
                </span>
                ...
              </p>
            </div>
          }

        <div onInput={e => setMessage(e.currentTarget.textContent)} contentEditable tabIndex={0} enterKeyHint='enter' spellCheck={false} onKeyDown={handleKeyDown} className='w-full max-h-[100px] overflow-scroll relative z-0 outline-none text-white p-2'></div>
        </div>
    </FancyBorderContainer>
  )
}

export default InputComponent