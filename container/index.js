import React from 'react'
import Gaming from './gaming'
import Welcome from './welcomeWindow'
import Counter from './countMoves'
import CongratWindow from './congratWindow'

const Main = () => (
    <div id="mainBlock">
        <Welcome/>
        <Counter/>
        <Gaming/>
        <CongratWindow/>
    </div>
);

export default Main;