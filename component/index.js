import React from 'react'
import Counter from './counter'
import Game from './game'
import Congratuation from './congratuation'

const Main = () => (
    <div id="game">
        <h1>Hello World</h1>
        <Counter />
        <Game />
        <Congratuation />
    </div>
);

export default Main;