import { useState } from 'react'
import { RiArrowDropLeftLine, RiArrowDropDownLine } from 'react-icons/ri'
import { AccordionDataModel } from '../models/accordionDataModel'

const items: AccordionDataModel[] = [
    {
        id: '1',
        label: 'What is this repo for?',
        content:
            'This repo is to store a variety of reusable UI components for my futher projects to use. Super handy!',
    },
    {
        id: '2',
        label: 'Do you have other projects?',
        content:
            'Yes, I have lots of projects including fullstack and backend focused ones. Feel free to check my github.',
    },
    {
        id: '3',
        label: 'What are the future possibilities?',
        content:
            'I will continue to add different UI components to extend my component family',
    },
]

function Accordion() {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    const handleClick = (clickedIndex: number) => {
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === clickedIndex) {
                return -1
            } else {
                return clickedIndex
            }
        })
    }

    return (
        <div className="accordion-container">
            {items.map((item: any, index: number) => {
                return (
                    <div key={item.id}>
                        <div
                            className="accordion-section-container"
                            onClick={() => handleClick(index)}
                        >
                            <div className="accordion-bar">
                                {item.label}
                                <span className="arrow-icon">
                                    {index === expandedIndex ? (
                                        <RiArrowDropDownLine />
                                    ) : (
                                        <RiArrowDropLeftLine />
                                    )}
                                </span>
                            </div>

                            {index === expandedIndex && (
                                <div className="expend-content">
                                    {item.content}
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Accordion
