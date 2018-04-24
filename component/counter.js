import React from 'react'

const Counter = ({welcome, congrat, counter}) => {
    if(welcome === true && congrat === false) {
        return (
            <div id="counter">
                <p>Виконано ходів:</p>
                <input type="text" value={counter} readOnly/>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

};

export default Counter;