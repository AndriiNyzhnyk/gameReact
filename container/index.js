import React from 'react'
import Gaming from './gaming'
import Welcome from './welcomeWindow'
import Counter from './countMoves'

const Main = () => (
    <div id="mainBlock">
        <Welcome/>
        <Counter/>
        <Gaming/>
    </div>
);

export default Main;