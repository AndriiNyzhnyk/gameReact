import React from 'react'

const Item = ({src, id, onClick}) => {
    console.log(typeof src);
    if(src !== undefined) {
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