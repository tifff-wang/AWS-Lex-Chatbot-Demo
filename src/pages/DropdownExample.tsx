import React from 'react'
import { DropdownDataModel } from '../models/dropdownDataModel'
import Dropdown from '../components/Dropdown'

const DropdownExample = () => {
    const options: DropdownDataModel[] = [
        { label: 'Exotic shorthair', value: 'Exotic shorthair' },
        { label: 'Ragdoll', value: 'Ragdoll' },
        { label: 'British shorthair', value: 'British shorthaire' },
    ]
    return (
        <div>
            <Dropdown options={options} />
        </div>
    )
}

export default DropdownExample
