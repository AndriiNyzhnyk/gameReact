import React from 'react'

const Welcome = ({state, startGame}) => {
    console.log(state);
    if(state.welcome === false) {
        return (
            <div id="welcome">
                <h3>Введіть своє ім'я</h3>
                <textarea required wrap="off" id="name"
                          placeholder="Ваше ім'я"></textarea><br/>
                <button id="newGame" onClick={startGame}>Почати гру</button>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
};

export default Welcome;