import React from 'react'

let counterVisibleImg = 0;
let visibleImg = Object.create(null);
visibleImg.first = '';

const Item = ({src, id, onClick, hide}) => {
    if(typeof(src) !== 'undefined') {

        if(counterVisibleImg !== 2) {
            visibleImg.first = src;
            counterVisibleImg++;
        } else if(visibleImg.first === src) {
            setTimeout(() => {
                counterVisibleImg = 0;
                visibleImg.first = '';
                hide();
            }, 1500);
        } else {
            counterVisibleImg = 0;
            visibleImg.first = '';
            hide();
        }

        return (
            <div className="items" id={id} onClick={onClick}>
                <img src={src}></img>
            </div>
        );
    } else {
        return (
            <div className="items" id={id} onClick={onClick}></div>
        );
    }
};

export default Item;