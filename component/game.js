import React from 'react'
import Item from './item'

const Game = ({items, itemClick}) => (
    <div id="game">
        {
            items.map( item => <Item
                key={item}
                src={item}
                onClick={ () => itemClick() }
                />
            )
        }
    </div>
);

export default Game;