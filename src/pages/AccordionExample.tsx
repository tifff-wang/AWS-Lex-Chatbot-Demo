import React from 'react'
import { AccordionDataModel } from '../models/accordionDataModel'
import Accordion from '../components/Accordion'

const AccordionExample = () => {
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
    return <div><Accordion items={items} /></div>
}

export default AccordionExample
