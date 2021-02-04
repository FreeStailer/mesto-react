function PopupWithForm(props) {
    return (
        <div id={props.popupId} className={`modal modal_profile ${props.isOpen ? "modal_open" : ""}`}>
            <div className="modal__content">
                <button type="button" className="modal__button-close" onClick={props.onClose}></button>
                <h2 className="modal__heading">{props.title}</h2>
                <form id={props.formId} className="form" method="GET" noValidate>
                    <fieldset className="form__input">
                        {props.children}
                    </fieldset>
                </form>
            </div>
        </div>
        );
    }
    
  export default PopupWithForm;