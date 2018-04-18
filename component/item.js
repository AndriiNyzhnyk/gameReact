import React from 'react'

const Item = ({src, onClick}) => (
    <div className="items">
        <img src={src} alt="animal"></img>
    </div>
);

export default Item;