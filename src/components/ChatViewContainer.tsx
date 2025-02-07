import { useEffect } from "react"
import { useResponseState, useCurrentChat, useMessageInStream } from "../state/AppState"
import MarkdownRenderer from "./MarkdownRenderer"
import SimoBot from "./SimoBot"

const ChatViewContainer = () => {

    const currentChat = useCurrentChat()

    const messageInStream = useMessageInStream()

    const responseState = useResponseState()

    const scrollToBottom = () => {
        const chatViewContainer = document.getElementById('chat-view-container')
        chatViewContainer?.scrollTo({ top: chatViewContainer.scrollHeight, behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messageInStream , currentChat])

    return (
        <div id="chat-view-container" className='w-full md:w-[600px] h-[calc(100%-150px)] flex flex-col pt-[100px] overflow-scroll gap-10'>
            {
                currentChat.map((item, _) => (
                    <>
                        {
                            item.role === 'user' ?
                                <div className='w-full flex justify-end' key={_}>
                                    <p className="shadow-text p-[20px]">{item.content}</p>
                                </div>
                                :
                                <div className='w-full flex flex-col gap-2 justify-start' key={_}>
                                    <div className="w-max max-w-[600px]">
                                        <MarkdownRenderer text={item.content} />
                                    </div>

                                    <p className="text-[rgba(255,255,255,0.50)] font-depature-mono text-[12px]">{item.modelId}</p>
                                </div>
                        }
                    </>
                ))
            }

            {
                responseState === 'loading' &&
                <div className='w-full flex gap-2 justify-start items-center'>
                    <SimoBot />
                    <p className="text-[rgba(255,255,255,0.50)] font-depature-mono text-[12px] animate-pulse">SIMO is thinking...</p>
                </div>
            }

            {
                messageInStream.length > 0 &&
                <div className='w-full flex flex-col gap-[8px] justify-start'>
                    <div className="md:w-[600px]">
                        <MarkdownRenderer text={messageInStream} />
                    </div>
                    {
                        responseState === 'streaming' &&
                        <div className='w-full flex gap-2 justify-start items-center'>
                            <SimoBot />
                            <p className="text-[rgba(255,255,255,0.50)] font-depature-mono text-[12px] animate-pulse">SIMO is responding...</p>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default ChatViewContainer