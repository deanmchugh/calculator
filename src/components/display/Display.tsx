import React from 'react'
import './Display.css'

interface DisplayText {
    output: string
}

const Display = ({output}: DisplayText) => {
    return (
        <div className='display'>
            <p>{output || '0'}</p>
        </div>
    )
}

export default Display