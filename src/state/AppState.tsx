import { create } from 'zustand'
import { MessageItem } from "../lib/types"
import { LanguageModelV1, streamText } from 'ai'
import { ollama } from 'ollama-ai-provider'
import { fetch } from '@tauri-apps/plugin-http'
import { systemPrompt } from '../lib'

interface AppState {
  models: any[]
  currentChat: MessageItem[]
  messageInStream: string
  currentModelId: string
  currentModelRef?: LanguageModelV1
  responseState: 'idle' | 'streaming' | 'loading' | 'success' | 'error'

  // Action methods
  fetchModels: () => Promise<void>
  setModels: (models: any[]) => void
  setCurrentChat: (chat: MessageItem[]) => void
  setMessageInStream: (message: string) => void
  setCurrentModelId: (modelId: string) => void
  sendMessage: (message: string) => Promise<void>
}

export const useAppStore = create<AppState>((set, get) => ({
  models: [],
  currentChat: [],
  messageInStream: '',
  currentModelId: '',
  currentModelRef: undefined,
  responseState: 'idle',

  fetchModels: async () => {

    const { setModels , setCurrentModelId } = get()

    try {
      const response = await fetch('http://localhost:11434/api/tags' , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      const data = (await response.json() as any).models
      
      setModels(data)

      setCurrentModelId(data[0]?.name ?? '')

    } catch (error) {
      throw new Error('CONNECTION ERROR')
    }
  },

  setModels: (models) => set({ models }),
  
  setCurrentChat: (currentChat) => set({ currentChat }),
  
  setMessageInStream: (messageInStream) => set({ messageInStream }),
  
  setCurrentModelId: (currentModelId) => {

    set({ 
      currentModelId,
      currentModelRef: ollama(currentModelId)
    })
  },

  sendMessage: async (message: string) => {

    const { 
      currentChat, 
      currentModelRef, 
      setCurrentChat,
      currentModelId
    } = get()

    if (!currentModelRef) return

    
    // Add user message
    const updatedChat = [...currentChat, { role: 'user', content: message }] as MessageItem[]
    
    setCurrentChat(updatedChat)
    
    set({ responseState: 'loading' })
    
    try {
      const { textStream, text } = streamText({
        system: systemPrompt,
        prompt: message,
        model: currentModelRef,
      })

      // Stream incoming message
      for await (const chunk of textStream) {
        set(p => ({ responseState: 'streaming' , messageInStream: p.messageInStream + chunk }))
      }

      // Add full assistant message
      const fullAssistantMessage = await text

      setCurrentChat([...updatedChat, { modelId: currentModelId, role: 'assistant', content: fullAssistantMessage }])

      set({ messageInStream: '' , responseState: 'idle' })
    } catch (error) {
      console.error('Error sending message', error)
    }
  },
}))

// Optional: Custom hook for easier access
export const useModels = () => useAppStore(state => state.models)
export const useCurrentChat = () => useAppStore(state => state.currentChat)
export const useMessageInStream = () => useAppStore(state => state.messageInStream)
export const useCurrentModelId = () => useAppStore(state => state.currentModelId)
export const useResponseState = () => useAppStore(state => state.responseState)