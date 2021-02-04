import React from 'react';

function ImagePopup(props) {
    return (
        <div className={`modal modal_viewer ${props.isOpen ? "modal_open" : ""}`}>
            <div className="modal__content modal__content_viewer">
                <button type="button" className="modal__button-close" onClick={props.onClose}></button>
                <img src={props.card != null ? props.card.link : ''} className="modal__photo" alt={props.card.name} />
                <h2 className="modal__title">{props.card != null ? props.card.name : ''}</h2>
            </div>
        </div>
        );
    }
    
  export default ImagePopup;