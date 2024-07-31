import type { ComponentPropsWithoutRef } from 'react'

interface buttonProps extends ComponentPropsWithoutRef<'button'> {
    children: string
    buttonType: 'default' | 'inverted' | 'rounded'
}

const buttonClassName = {
    inverted: 'inverted-button',
    default: 'default-button',
    rounded: 'rounded-button'
}

const Button = ({ children, buttonType, ...rest }: buttonProps) => {
    return (
        <button
            className={`button-container ${buttonClassName[buttonType]}`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
