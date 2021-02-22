import PopupWithForm from "./PopupWithForm.js";
import React from "react";

function AddPlacePopup(props) {

    const placeRef = React.useRef();
    const linkRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddCard({place: placeRef.current.value,
                         link: linkRef.current.value
                        });
    }

    return(
        <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} buttonText="Создать" 
                       popupId="photo-add" title="Новое место" formId="load-cards">
            <label htmlFor="place" className="form__label">
                <input ref={placeRef} type="text" name="place" id="place" className="form__item" placeholder="Название" required minLength="1" maxLength="30" />
                <span className="form__input-error" id="place-error"></span>
            </label>
            <label htmlFor="photo" className="form__label">
                <input ref={linkRef} type="url" id="photo" name="link" className="form__item" placeholder="Ссылка на картинку" required/>         
                <span className="form__input-error" id="link-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup