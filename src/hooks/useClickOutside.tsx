import { RefObject, useEffect } from 'react'

function useClickOutside(ref: RefObject<HTMLElement>, handler: () => void) {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return
            } else {
                handler()
            }
        }

        document.addEventListener('mousedown', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
        }
    }, [ref, handler])
}

export default useClickOutside
