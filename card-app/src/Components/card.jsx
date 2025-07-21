import React from "react";
import "./card.css"

const Card = (props) => {
    return (
        <div className="card-container">
            <p id="user-name">{props.name}</p>
            <img id="user-img" src={props.image} alt={props.name} />
            <p id="user-desc">{props.disc}</p>
        </div>

    )
}

export default Card