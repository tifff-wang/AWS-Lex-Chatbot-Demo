import React from 'react'
import './App.css'
import 'react-chat-elements/dist/main.css'
import MessageListExample from './components/MessageListExample'

const App: React.FC = () => {
    return (
        <div className="rce-example">
            <div className="rce-example-component">
                {' '}
                <MessageListExample />
            </div>
        </div>
    )
}

export default App
