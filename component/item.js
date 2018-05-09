import React from 'react'

let counterVisibleImg = 0;

const Item = ({src, id, onClick, hide}) => {
    if(src !== undefined) {
        if(counterVisibleImg !== 2) {
            counterVisibleImg++;
        } else {
            counterVisibleImg = 0;
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