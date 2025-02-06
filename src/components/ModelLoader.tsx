import { invoke } from "@tauri-apps/api/core"
import { useEffect, useState } from "react"
import FancyBorderContainer from "./FancyBorderContainer"
import { sleep } from "../lib"
import { useAppStore } from "../state/AppState"



const ModelLoader = ({ children }: { children: React.ReactNode }) => {

  const fetchModels = useAppStore((state) => state.fetchModels)
  
  const [modelState, setModelState] = useState<'ALREADY_RUNNING' | 'SUCCESS' | 'NO_PROCESS_RUNNING' | 'NONE' | 'ERROR' | 'CONNECTION_ERROR' | 'LOADING' | 'CONNECTING'>('NONE')

  const load_llama = async () => {

    setModelState('LOADING')

    await sleep()

    try {
      await invoke('start_ollama')

      setModelState('SUCCESS')
    } catch (error) {
      if (error === 'ALREADY_RUNNING') {

        setModelState('CONNECTING')

        await fetchModels()

        await sleep()

        setModelState('SUCCESS')
      }else if(error === 'CONNECTION_ERROR'){
        setModelState('CONNECTION_ERROR')
      } else {
        setModelState('ERROR')
      }
    }

  }

  useEffect(() => {
    load_llama()
  }, [])

  return (
    <>
      {(modelState === 'SUCCESS' || modelState === 'ALREADY_RUNNING') && children}
      {
        (modelState === 'ERROR' || modelState === 'CONNECTION_ERROR') &&
        <div className="size-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl">Oop's something went wrong</h1>
          <p>Couldn't load ollama</p>

          <FancyBorderContainer onClick={load_llama}>
            <p>Try Again</p>
          </FancyBorderContainer>
        </div>
      }
      {
        modelState === 'LOADING' &&
        <div className="size-full flex items-center justify-center gap-2">
          <h1 className="text-3xl animate-pulse">LOADING OLLAMA...</h1>
        </div>
      }
      {
        modelState === 'CONNECTING' &&
        <div className="size-full flex items-center justify-center gap-2">
          <h1 className="text-3xl animate-pulse">CONNECTING TO OLLAMA...</h1>
        </div>
      }
    </>
  )
}

export default ModelLoader