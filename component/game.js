import React from 'react'
import Item from './item'

const Game = ({items, itemClick}) => (
    <div id="game">{createElement(items, itemClick)}</div>

);

function createElement( items, itemClick) {
    let res = new Array(items.length);
    for(let i = 0; i < items.length; i++) {
        res.push(<Item
                    key={items[i]}
                    src={items[i]}
                    onClick={() => itemClick()}
                />
        );
    }
    return res;
}

export default Game;

// items.map(item => <Item
//         key={item}
//         src={item}
//         onClick={() => itemClick()}
//     />
// )