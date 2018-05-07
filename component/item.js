import React from 'react'

const Item = ({src, id, onClick}) => (
    <div className="items" id={id} onClick={onClick}>
        <img src={src}></img>
    </div>
);

export default Item;