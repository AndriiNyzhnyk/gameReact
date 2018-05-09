import React from 'react'
import Item from './item'

const Game = ({init, images, imgCount, visibleImg, itemClick, hideImg}) => (
    <div id="game">{createElement(init, images, imgCount, visibleImg, itemClick, hideImg)}</div>
);

function createElement(init, images, imgCount, visibleImg, itemClick, hideImg) {
    console.log(init);
    if(init === false) {
        // console.log(init,
        //             images,
        //             imgCount,
        //             itemClick ,
        //             visibleImg);
        return imgList(init, images, imgCount, visibleImg, itemClick, hideImg);
    }
}

function imgList(init, images, imgCount, visibleImg, itemClick, hideImg) {
    let outputArr = [];
    for(let i = 0; i < imgCount; i++) {
        if(i === visibleImg.first || i === visibleImg.second) {
            outputArr.push(<Item
                    id={`item_${i}`}
                    src={images[i]}
                    onClick={itemClick}
                    hide={hideImg}
                />
            );
        } else {
            outputArr.push(<Item
                id={`item_${i}`}
                onClick={itemClick}
                hide={hideImg}
            />);
        }

    }
    return outputArr;
}

export default Game;