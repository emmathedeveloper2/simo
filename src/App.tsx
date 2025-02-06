import InputComponent from './components/InputComponent';
import Navbar from './components/Navbar/Navbar';
import './global.css'
import '@fontsource/commit-mono';
import ChatViewContainer from './components/ChatViewContainer';

const App = () => {

  return (
    <div className='size-full flex flex-col gap-4 items-center justify-center'>
        <Navbar />
        <ChatViewContainer />
        <InputComponent />
    </div>
  )
}

export default App
