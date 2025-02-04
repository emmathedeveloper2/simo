import { useEffect } from "react"
import { useCurrentChat, useMessageInStream } from "../state/AppState"
import MarkdownRenderer from "./MarkdownRenderer"

const ChatViewContainer = () => {

    const currentChat = useCurrentChat()
    
    const messageInStream = useMessageInStream()

    const scrollToBottom = () => {
        const chatViewContainer = document.getElementById('chat-view-container')
        chatViewContainer?.scrollTo({ top: chatViewContainer.scrollHeight, behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messageInStream])

    return (
        <div id="chat-view-container" className='w-full md:w-[600px] h-[calc(100%-150px)] flex flex-col pt-[100px] overflow-scroll gap-4'>
            {
                currentChat.map((item, _) => (
                    <>
                        {
                            item.role === 'user' ?
                            <div className='w-full flex justify-end' key={_}>
                                <p>{item.content}</p>
                            </div>
                            :
                            <div className='w-full flex justify-start' key={_}>
                                <MarkdownRenderer text={item.content} />
                            </div>
                        }
                    </>
                ))
            }

            {
                messageInStream.length > 0 &&
                <div className='w-full flex justify-start'>
                    <MarkdownRenderer text={messageInStream} />
                </div>
            }
        </div>
    )
}

export default ChatViewContainer