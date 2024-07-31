import { useState, useEffect, useRef, SetStateAction } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import useClickOutside from '../hooks/useClickOutside'
import { DropdownDataModel } from '../models/dropdownDataModel'

interface DropdownProps {
    options: DropdownDataModel[]
}

function Dropdown({ options }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [selection, setSelection] = useState<string | null>(null)
    const dropdownRef = useRef<HTMLDivElement | null>(null)
    useClickOutside(dropdownRef, () => setIsOpen(false))

    const handleArrowClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option: DropdownDataModel) => {
        setIsOpen(false)
        setSelection(option.label)
    }

    return (
        <div ref={dropdownRef} className="dropdown-container">
            <div className="dropdown-bar" onClick={handleArrowClick}>
                {selection || 'Select...'}
                <RiArrowDropDownLine />
            </div>
            {isOpen && (
                <div className="dropdown-options-container">
                    {options.map((option) => {
                        return (
                            <div
                                className="dropdown-option"
                                onClick={() => handleOptionClick(option)}
                                key={option.value}
                            >
                                {option.label}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Dropdown
