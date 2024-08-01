import { useRef, useState } from 'react'
import { Input } from 'react-chat-elements'
import { MessageList } from 'react-chat-elements'
import {
    fileMessage,
    photoMessage,
    systemMessage,
    textMessage,
    sentTextMessage,
} from '../utils/MessageTypes'
import { RiAttachment2 } from 'react-icons/ri'
import { FaArrowCircleUp } from 'react-icons/fa'
import { BsChatTextFill } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FaRegFileAlt } from 'react-icons/fa'
import { FaRegImage } from 'react-icons/fa6'
import '../App.css'
import { createSentTextMessage } from '../utils/common'

let clearRef = () => {}

const useForceUpdate = () => {
    const [value, setValue] = useState(0)
    return () => setValue(() => value + 1)
}

function MessageListExample() {
    const sentTextMessage1 = createSentTextMessage('Sure!')
    const sentTextMessage2 = createSentTextMessage('Received, thanks!')
    const chatDemoMessages = [
        textMessage,
        sentTextMessage1,
        fileMessage,
        photoMessage,
        sentTextMessage2,
        // systemMessage,
    ]
    const [messageListArray, setMessageListArray] =
        useState<any>(chatDemoMessages)
    const [chatOpen, setChatOpen] = useState<boolean>(false)
    const [uploadOpen, setUploadOpen] = useState<boolean>(false)
    const messageListReferance = useRef()
    const inputReferance = useRef()

    return (
        <div className="chat-window-container">
            <div className="chat-icon-container">
                {chatOpen ? (
                    <AiFillCloseCircle
                        size={50}
                        onClick={() => setChatOpen(false)}
                    />
                ) : (
                    <BsChatTextFill
                        size={50}
                        onClick={() => setChatOpen(true)}
                    />
                )}
            </div>
            {chatOpen && (
                <div className="right-panel rce-example-messageList">
                    <div className="rce-example-heading">
                        <h2>Chat</h2>
                    </div>
                    <MessageList
                        className="message-list"
                        referance={messageListReferance}
                        dataSource={messageListArray}
                        lockable={true}
                        downButton={true}
                        downButtonBadge={10}
                        sendMessagePreview={true}
                    />

                    <div className="rce-example-input-container">
                        <div
                            className="attachment-icon-container"
                            onClick={() => setUploadOpen(!uploadOpen)}
                        >
                            <RiAttachment2 size={30} />
                        </div>

                        <Input
                            className="rce-example-input"
                            placeholder="Write your message here."
                            defaultValue=""
                            multiline={true}
                            maxlength={300}
                            onMaxLengthExceed={() =>
                                console.log('onMaxLengthExceed')
                            }
                            referance={inputReferance}
                            clear={(clear: any) => (clearRef = clear)}
                            maxHeight={50}
                            onKeyPress={(e: any) => {
                                if (e.shiftKey && e.charCode === 13) {
                                    return true
                                }
                                if (e.charCode === 13) {
                                    clearRef()
                                    // addMessage()
                                }
                            }}
                            rightButtons={<FaArrowCircleUp size={30} />}
                        />
                    </div>
                    {uploadOpen && (
                        <div className="file-upload-icons-container">
                            <FaRegFileAlt size={25} />
                            <FaRegImage size={25} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default MessageListExample
