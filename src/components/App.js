import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
}

const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
}

const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
}

const [isDelPopupOpen, setIsDelPopupOpen] = React.useState(false);
function handleDelClick() {
    setIsDelPopupOpen(true)
}


const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({});
function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
}

function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsImagePopupOpen(false)
    setIsDelPopupOpen(false)
}

  return (
    <div>
        <div className="page__content">
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} 
                  onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onDelClick={handleDelClick} />
            <Footer />

            <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onSubmit="Сохранить" popupId="edit" title="Редактировать профиль" formId="edit-profile">
                <label htmlFor="name" className="form__label">
                    <input placeholder="Имя" type="text" name="name" id="name" className="form__item" required minLength="2" maxLength="40" />
                    <span className="form__input-error" id="name-error" />
                </label>
                <label htmlFor="about" className="form__label">
                    <input placeholder="комментарии" type="text" id="about" name="about" className="form__item" required minLength="2" maxLength="200" />        
                    <span className="form__input-error" id="about-error" />
                </label>
            </PopupWithForm>

            <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onSubmit="Создать" popupId="photo-add" title="Новое место" formId="load-cards">
                <label htmlFor="title" className="form__label">
                    <input type="text" name="title" id="title" className="form__item" placeholder="Название" required minLength="1" maxLength="30" />
                    <span className="form__input-error" id="title-error"></span>
                </label>
                <label htmlFor="photo" className="form__label">
                    <input type="url" id="photo" name="link" className="form__item" placeholder="Ссылка на картинку" required/>         
                    <span className="form__input-error" id="link-error"></span>
                </label>
            </PopupWithForm>

            <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onSubmit="Сохранить" popupId="avatar-add" title="Обновить аватар" formId="load-avatar">
                <label htmlFor="avatar" className="form__label">
                    <input type="url" id="avatar" name="avatar" className="form__item" placeholder="Ссылка на аватар" required />&nbsp;         
                    <span className="form__input-error" id="avatar-error"></span>
              </label>
            </PopupWithForm>

            <PopupWithForm isOpen={isDelPopupOpen} onClose={closeAllPopups} onSubmit="Да" title="Вы уверены?" popupId="del-popup">
            </PopupWithForm>

            <ImagePopup isOpen={isImagePopupOpen} card={selectedCard} onClose={closeAllPopups}/>
        </div>
    </div>
  );
}

export default App;


//         <div id="del-popup" className="modal modal_card">
//             <div className="modal__content">
//                 <button type="button" className="modal__button-close"></button>
//                 <h2 className="modal__heading">Вы уверены?</h2>
//                 <form className="form" action="#" noValidate>
//                     <fieldset className="form__input">
//                         <button type="submit" className="form__button">Да</button>
//                     </fieldset>        
//                 </form>
//             </div>
//         </div>