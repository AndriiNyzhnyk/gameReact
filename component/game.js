import React from 'react'
import Item from './item'

const Game = ({init, images, imgCount, visibleImg, itemClick}) => (
    <div id="game">{createElement(init, images, imgCount, visibleImg, itemClick)}</div>
);

function createElement(init, images, imgCount, visibleImg, itemClick) {
    console.log(init);
    if(init === false) {
        console.log(init,
                    images,
                    imgCount,
                    itemClick ,
                    visibleImg);
        return imgList(init, images, imgCount, visibleImg, itemClick);
    }
}

function imgList(init, images, imgCount, visibleImg, itemClick) {
    let outputArr = [];
    for(let i = 0; i < imgCount; i++) {
        if(i === visibleImg.first || i === visibleImg.second) {
            outputArr.push(<Item
                    id={`item_${i}`}
                    src={images[i]}
                    onClick={() => itemClick()}
                />
            );
        } else {
            outputArr.push(<Item
                id={`item_${i}`}
                onClick={() => itemClick()}/>);
        }

    }
    return outputArr;
}

export default Game;