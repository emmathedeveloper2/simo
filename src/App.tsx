import InputComponent from './components/InputComponent';
import Navbar from './components/Navbar/Navbar';
import './global.css'
import '@fontsource/commit-mono';
import ChatViewContainer from './components/ChatViewContainer';
import { useEffect } from 'react';
import { useAppStore } from './state/AppState';

const App = () => {

  const fetchModels = useAppStore((state) => state.fetchModels)

  useEffect(() => {
    fetchModels()
  }, [])

  return (
    <div className='size-full flex flex-col gap-4 items-center justify-center'>
      <Navbar />
      <ChatViewContainer />
      <InputComponent />
    </div>
  )
}

export default App
