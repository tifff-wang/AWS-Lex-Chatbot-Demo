import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'
const items = [
    {
        id: 'l2kj5',
        label: 'Can I use React on a project?',
        content:
            'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
        id: 'lk2j35lkj',
        label: 'Can I use Javascript on a project?',
        content:
            'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
        id: 'l1kj2i0g',
        label: 'Can I use CSS on a project?',
        content:
            'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
]

function Accordion() {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    const handleClick = (nextIndex: number) => {
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === nextIndex) {
                return -1
            } else {
                return nextIndex
            }
        })
    }

    const renderedItems = items.map((item: any, index: number) => {
        const isExpanded = index === expandedIndex

        const icon = (
            <span className="arrow-icon">
                {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
        )

        return (
            <div key={item.id}>
                <div
                    className="accordion-bar"
                    onClick={() => handleClick(index)}
                >
                    {item.label}
                    {icon}
                </div>
                {isExpanded && (
                    <div className="expend-content">{item.content}</div>
                )}
            </div>
        )
    })

    return <div className="accordion-container">{renderedItems}</div>
}

export default Accordion
