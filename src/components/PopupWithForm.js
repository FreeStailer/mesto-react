import React from 'react';

function PopupWithForm(props) {

    const [isOpen, onClose] = [props.isOpen, props.onClose];
    React.useEffect(() => {
        if (!isOpen) return;
        const handleEscapeClose = (event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };
        const handleOverlayClose = (event) => {
          if (event.target.classList.contains('modal') || event.target.classList.contains('modal__button-close')) {
              onClose();
              }
        }
        document.addEventListener("keydown", handleEscapeClose);
        document.addEventListener("mousedown", handleOverlayClose);
        return () => {
          document.removeEventListener("keydown", handleEscapeClose);
          document.removeEventListener("mousedown", handleOverlayClose);
        };
      }, [isOpen, onClose]);

    return (
        <div id={props.popupId} className={`modal modal_profile ${props.isOpen ? "modal_open" : ""}`}>
            <div className="modal__content">
                <button type="button" className="modal__button-close" onClick={props.onClose}></button>
                <h2 className="modal__heading">{props.title}</h2>
                <form id={props.formId} className="form" method="GET" noValidate>
                    <fieldset className="form__input">
                        {props.children}
                        <button type="submit" className="form__button">{props.onSubmit}</button>
                    </fieldset>
                </form>
            </div>
        </div>
        );
    }
    
  export default PopupWithForm;