import { loremIpsum } from 'lorem-ipsum'
import React, { useEffect, useState } from 'react'
import { BsListTask } from 'react-icons/bs'
import { ChatList } from 'react-chat-elements'
import { SideBar } from 'react-chat-elements'
import { IChatItemProps } from 'react-chat-elements'

function Test(params: any) {
    return (
        <div
            className="rce-citem-body--bottom-status-icon"
            onClick={() => console.log('clicked')}
        >
            <span
                style={{
                    fontSize: '10px',
                    position: 'absolute',
                    padding: '2px',
                    right: '-12px',
                    top: '-6px',
                    color: 'white',
                    borderRadius: '100%',
                    width: '12px',
                    height: '12px',
                    textAlign: 'center',
                }}
            >
                {Math.ceil(Math.random() * 9) + 1}
            </span>
            <BsListTask />
        </div>
    )
}

function ChatListExample() {
    const photo =
        'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII='

    const [chatListAray, setChatListAray] = useState<IChatItemProps[]>([
        {
            id: String(Math.random()),
            avatar: `data:image/png;base64,${photo}`,
            avatarFlexible: true,
            statusColor: 'lightgreen',
            statusColorType:
                Math.floor((Math.random() * 100) % 2) === 1
                    ? 'encircle'
                    : undefined,
            alt: loremIpsum({ count: 2, units: 'words' }),
            title: loremIpsum({ count: 2, units: 'words' }),
            date: new Date(),
            subtitle: loremIpsum({ count: 1, units: 'sentences' }),
            unread: Math.floor((Math.random() * 10) % 3),
            muted: Math.floor((Math.random() * 10) % 2) === 1,
            showMute: Math.floor((Math.random() * 10) % 2) === 1,
            showVideoCall: Math.floor((Math.random() * 10) % 2) === 1,
            customStatusComponents: [Test],
        },
    ])

    useEffect(() => {
        if (chatListAray.length === 5) return
        setChatListAray([...chatListAray, getRandomChat()])
    }, [chatListAray])

    const getRandomChat: any = (nested = true) => {
        return {
            id: String(Math.random()),
            avatar: `data:image/png;base64,${photo}`,
            avatarFlexible: true,
            statusColor: 'lightgreen',
            statusColorType:
                Math.floor((Math.random() * 100) % 2) === 1
                    ? 'encircle'
                    : undefined,
            alt: loremIpsum({ count: 2, units: 'words' }),
            title: loremIpsum({ count: 2, units: 'words' }),
            date: new Date(),
            subtitle: loremIpsum({ count: 1, units: 'sentences' }),
            unread: Math.floor((Math.random() * 10) % 3),
            muted: Math.floor((Math.random() * 10) % 2) === 1,
            showMute: Math.floor((Math.random() * 10) % 2) === 1,
            showVideoCall: Math.floor((Math.random() * 10) % 2) === 1,
            customStatusComponents: [Test],
            subList: nested && [getRandomLiteChat(), getRandomLiteChat()],
        }
    }

    const getRandomLiteChat: any = () => {
        return {
            id: String(Math.random()),
            avatar: `data:image/png;base64,${photo}`,
            avatarFlexible: true,
            title: loremIpsum({ count: 2, units: 'words' }),
            subtitle: loremIpsum({ count: 1, units: 'sentences' }),
            date: new Date(),
            unread: Math.floor((Math.random() * 10) % 3),
        }
    }

    const SidebarData = {
        top: 'About Me',
        center: 'Chat List',
        bottom: 'Detaysoft',
    }

    return (
        <div className="chat-list">
            <SideBar
                center={
                    <ChatList
                        dataSource={chatListAray}
                        onClickMute={({ ...props }) => console.log(props)}
                        onClickVideoCall={({ ...props }) => console.log(props)}
                        id={''}
                        lazyLoadingImage={''}
                        onDragEnter={(e: React.DragEventHandler, id: number) =>
                            console.log(e, id, 'onDragEnter')
                        }
                        onDragLeave={(e: React.DragEventHandler, id: number) =>
                            console.log(e, id, 'onDragLeave')
                        }
                        onDrop={(e: React.DragEventHandler, id: number) =>
                            console.log(e, id, 'onDrop')
                        }
                        onDragComponent={() => (
                            <div className="on-drag-mlist">
                                {loremIpsum({ count: 4, units: 'words' })}
                            </div>
                        )}
                    />
                }
            />
        </div>
    )
}

export default ChatListExample
