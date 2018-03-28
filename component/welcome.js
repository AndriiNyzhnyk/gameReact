import React from 'react'

const Welcome = () => (
    <div id="welcome">
        <h3>Введіть своє ім'я</h3>
        <textarea required wrap="off" id="name"
                  placeholder="Ваше ім'я"></textarea><br />
        <button id="newGame">Почати гру</button>
    </div>
);

export default Welcome;