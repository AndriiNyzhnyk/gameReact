import React from 'react'
import Item from './item'

const Game = ({items, onItemClick}) => (
    <div id="game">
        {
            items.map( item => <Item
                key={item}
                src={item}
                onclick={ () => onItemClick(item.id) }
                />
            )
        }
    </div>
);

export default Game;