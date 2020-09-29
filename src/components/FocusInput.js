import userEvent from '@testing-library/user-event'
import React,{useEffect,useRef} from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(  () =>{
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input ref={inputRef} type="text"/>
        </div>
    )
}

export default FocusInput
