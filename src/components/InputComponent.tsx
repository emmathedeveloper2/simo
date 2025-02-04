import { useState } from 'react'
import FancyBorderContainer from './FancyBorderContainer'
import { useAppStore } from '../state/AppState'


function InputComponent() {

  const [message, setMessage] = useState('')

  const sendMessage = useAppStore((state) => state.sendMessage)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    sendMessage(message)

    setMessage('')
  }

  return (
    <FancyBorderContainer
        className='w-full h-[100px] md:w-[600px] relative z-0 bg-[#ffffff08] backdrop-blur-[10px]'>

        <form onSubmit={handleSubmit} autoComplete='off' className='w-full h-1/2 relative z-0'>
          {
            message.length < 1 &&
            <div className='absolute top-0 left-0 -z-10 pointer-events-none flex items-center text-white/50 px-4 size-full'>
              <p>
                Message
                  <span className='text-white shadow-text animate-pulse ml-1'>
                     SIMO
                  </span>
                ...
              </p>
            </div>
          }

          <input
            name='message'
            className='size-full text-white outline-none border-none bg-transparent px-4'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </form>

        {/* <div className='w-full h-1/2 flex items-center p-4 text-white'>
          <button className='size-[40px] flex items-center justify-center relative cursor-pointer'>
            <div className='absolute top-0 left-0 -z-10 pointer-events-none flex items-center border-[2px] border-white opacity-40 blur-[1px] size-full bg-transparent'></div>
            <div className='absolute top-0 left-0 -z-10 pointer-events-none flex items-center border-[1px] border-white opacity-20 size-full bg-transparent'></div>
            +
          </button>
        </div> */}
      </FancyBorderContainer>
  )
}

export default InputComponent