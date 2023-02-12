import React from "react";
import './card.css'

const Card = ({text, price, img}) => {
    const imgStyle ={
        backgroundImage: `url(${img})`
    }
    return (
        <div className="card">
            <div className="card__img" style={imgStyle}>
                {/* <img src={img} alt="img"/> */}
            </div>
            <div className="card__price">{price}</div>
            <div className="card__text">{text}</div>
            <button className="btn">В корзину</button>
        </div>
    )
}

export default Card;