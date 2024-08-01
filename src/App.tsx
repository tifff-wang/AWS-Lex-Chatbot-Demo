import React, { useState } from 'react'
import './App.css'
import AvatarExample from './components/AvatarExample'
import ButtonExample from './pages/ButtonExample'
import DropdownExample from './pages/DropdownExample'
import MeetingListExample from './components/MeetingListExample'
import MessageListExample from './components/MessageListExample'
import PopupExample from './components/PopupExample'
import AccordionExample from './pages/AccordionExample'
import TableExample from './pages/TableExample'

const App: React.FC = () => {
    const [showComponent, setShowComponent] = useState('')

    const btnClick = (component: String) => {
        switch (component) {
            case 'messageList':
                return <MessageListExample />
            case 'table':
                return <TableExample />
            case 'button':
                return <ButtonExample />
            case 'dropdown':
                return <DropdownExample />
            case 'accordion':
                return <AccordionExample />
            case 'popup':
                return <PopupExample />
            default:
                break
        }
    }

    return (
        <div className="rce-example">
            <div className="rce-example-btn">
                <button
                    style={
                        showComponent === 'messageList'
                            ? {
                                  backgroundColor: '#ffffff',
                                  color: '#ffd6a5',
                                  border: '2px solid #ffd6a5',
                              }
                            : {
                                  backgroundColor: '#ffd6a5',
                                  color: '#ffffff',
                                  border: '2px solid #ffd6a5',
                              }
                    }
                    onClick={() => setShowComponent('messageList')}
                >
                    Message List
                </button>

                <button
                    style={
                        showComponent === 'table'
                            ? {
                                  backgroundColor: '#ffffff',
                                  color: '#9bf6ff',
                                  border: '2px solid #9bf6ff',
                              }
                            : {
                                  backgroundColor: '#9bf6ff',
                                  color: '#ffffff',
                                  border: '2px solid #9bf6ff',
                              }
                    }
                    onClick={() => setShowComponent('table')}
                >
                    Table
                </button>
                <button
                    style={
                        showComponent === 'button'
                            ? {
                                  backgroundColor: '#ffffff',
                                  color: '#a0c4ff',
                                  border: '2px solid #a0c4ff',
                              }
                            : {
                                  backgroundColor: '#a0c4ff',
                                  color: '#ffffff',
                                  border: '2px solid #a0c4ff',
                              }
                    }
                    onClick={() => setShowComponent('button')}
                >
                    Button
                </button>
                <button
                    style={
                        showComponent === 'dropdown'
                            ? {
                                  backgroundColor: '#ffffff',
                                  color: '#bdb2ff',
                                  border: '2px solid #bdb2ff',
                              }
                            : {
                                  backgroundColor: '#bdb2ff',
                                  color: '#ffffff',
                                  border: '2px solid #bdb2ff',
                              }
                    }
                    onClick={() => setShowComponent('dropdown')}
                >
                    Dropdown
                </button>
                <button
                    style={
                        showComponent === 'accordion'
                            ? {
                                  backgroundColor: '#ffffff',
                                  color: '#ffc6ff',
                                  border: '2px solid #ffc6ff',
                              }
                            : {
                                  backgroundColor: '#ffc6ff',
                                  color: '#ffffff',
                                  border: '2px solid #ffc6ff',
                              }
                    }
                    onClick={() => setShowComponent('accordion')}
                >
                    Accordion
                </button>
                <button
                    style={
                        showComponent === 'popup'
                            ? {
                                  backgroundColor: '#ffffff',
                                  color: '#bcd4e6',
                                  border: '2px solid #bcd4e6',
                              }
                            : {
                                  backgroundColor: '#bcd4e6',
                                  color: '#ffffff',
                                  border: '2px solid #bcd4e6',
                              }
                    }
                    onClick={() => setShowComponent('popup')}
                >
                    popup
                </button>
            </div>
            <div className="rce-example-component">
                {' '}
                {btnClick(showComponent)}
            </div>
        </div>
    )
}

export default App
