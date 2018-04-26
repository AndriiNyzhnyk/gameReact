import React, {Fragment} from 'react'
import Gaming from './gaming'
import Welcome from './welcomeWindow'
import Counter from './countMoves'
import CongratWindow from './congratWindow'

const Main = () => (
    <Fragment>
        <Welcome/>
        <Counter/>
        <Gaming/>
        <CongratWindow/>
    </Fragment>
);

export default Main;