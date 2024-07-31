import Button from '../components/Button'

const ButtonExample = () => {
    return (
        <div className="buttons-container">
            <Button buttonType="default">Default Button</Button>
            <Button buttonType="inverted">Inverted Button</Button>
            <Button buttonType="rounded">Rounded Button</Button>
        </div>
    )
}

export default ButtonExample
