import React from 'react'

const Item = ({src, onClick}) => (
    <div className="item" id={'item_'}>
        <img src={src} alt="animal"></img>
    </div>
);

export default Item;