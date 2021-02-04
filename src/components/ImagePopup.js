function ImagePopup(props) {
    return (
        <div className="modal modal_viewer">
            <div className="modal__content modal__content_viewer">
                <button type="button" className="modal__button-close"></button>
                <img src="#" className="modal__photo" alt="Картинка" />
                <h2 className="modal__title">модалТайтлВхтмл</h2>
            </div>
        </div>
        );
    }
    
  export default ImagePopup;