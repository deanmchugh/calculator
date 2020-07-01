import React from 'react'
import './Display.css'

interface DisplayText {
    output: string
}

const Display = ({output}: DisplayText) => {
    const fontSize = {
        fontSize: output.length > 9 ? 60 - output.length * 1.75 : 60
    }

    return (
        <div className='display'>
            <p className='text' style={fontSize}>{output || '0'}</p>
        </div>
    )
}

export default Display