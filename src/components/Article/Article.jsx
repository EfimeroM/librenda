import React from 'react'

function Article() {

    // dar clases condicionales para la posicion
    return (
        <div>
            <div>
                <a><h2>{title}</h2></a>
                <p>{paragraph}</p>
            </div>
            <div>
                <img src={image} />
            </div>
        </div>
    )
}

export default Article