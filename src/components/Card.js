import React from 'react';

function Card(props) {
    return (
            <li className="card">
                <img className="card__photo" 
                    src={props.card.link} 
                    alt={props.card.text} 
                    onClick={() => {
                        props.onCardClick(props.card);
                    }} />
                <button type="button" className="card__delete" onClick={props.onDelClick}/>
                <div className="card__text">
                    <h2 className="card__title">{props.card.name}</h2>
                    <div className="card__like-container">
                        <button type="button" className="card__like" onClick={props.onLike}></button>
                        <p className="card__like-data">{props.card.likes.length}</p>
                    </div>
                </div>
            </li>
    );
  }
  
export default Card; 