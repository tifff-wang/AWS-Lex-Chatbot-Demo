import { useState } from 'react'
import { RiArrowDropLeftLine, RiArrowDropDownLine } from 'react-icons/ri'
import { AccordionDataModel } from '../models/accordionDataModel'
interface AccordionProps {
    items: AccordionDataModel[]
}

function Accordion({ items }: AccordionProps) {
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
