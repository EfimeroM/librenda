import React from 'react'

function Heading() {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
                <button>{button}</button>
            </div>
            <img src={image}/>
        </div>
    )
}

export default Heading