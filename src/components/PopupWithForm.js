function PopupWithForm(props) {
    return (
        <div id="edit" className={`modal modal_profile ${props.isOpen ? "modal_open" : ""}`}>
            <div className="modal__content">
                <button type="button" className="modal__button-close"></button>
                <h2 className="modal__heading">Редактировать профиль</h2>
                <form id="edit-profile" className="form" action="#" name="Edit profile" method="GET">
                    <fieldset className="form__input">
                        <label htmlFor="name" className="form__label">
                            <input placeholder="Имя" type="text" name="name" id="name" className="form__item" value="name" required minLength="2" maxLength="40" />
                            <span className="form__input-error" id="name-error"></span>
                        </label>
                        <label htmlFor="about" className="form__label">
                            <input placeholder="комментарии" type="text" id="about" name="about" className="form__item" value="about" required minLength="2" maxLength="200" />&nbsp;         
                            <span className="form__input-error" id="about-error"></span>
                        </label>
                        <button type="submit" className="form__button">Сохранить</button>
                    </fieldset>
                </form>
            </div>
        </div>
        );
    }
    
  export default PopupWithForm; 

//   <div id="photo-add" className="modal modal_card">
//             <div className="modal__content">
//                 <button type="button" className="modal__button-close"></button>
//                 <h2 className="modal__heading">Новое место</h2>
//                 <form id="load-cards" className="form" action="#" name="Load_cards" noValidate>
//                     <fieldset className="form__input">
//                         <label htmlFor="title" className="form__label">
//                             <input type="text" name="title" id="title" className="form__item" placeholder="Название" required minLength="1" maxLength="30" />
//                             <span className="form__input-error" id="title-error"></span>
//                         </label>
//                         <label htmlFor="photo" className="form__label">
//                             <input type="url" id="photo" name="link" className="form__item" placeholder="Ссылка на картинку" required/>&nbsp;         
//                             <span className="form__input-error" id="link-error"></span>
//                         </label>
//                         <button type="submit" className="form__button" disabled>Создать</button>
//                     </fieldset>        
//                 </form>
//             </div>
//         </div>
//         <div id="avatar-add" className="modal modal_card">
//             <div className="modal__content">
//                 <button type="button" className="modal__button-close"></button>
//                 <h2 className="modal__heading">Обновить аватар</h2>
//                 <form id="load-avatar" className="form" action="#" name="Load_avatar" noValidate>
//                     <fieldset className="form__input">
//                         <label htmlFor="avatar" className="form__label">
//                             <input type="url" id="avatar" name="avatar" className="form__item" placeholder="Ссылка на аватар" required />&nbsp;         
//                             <span className="form__input-error" id="avatar-error"></span>
//                         </label>
//                         <button type="submit" className="form__button" disabled>Сохранить</button>
//                     </fieldset>        
//                 </form>
//             </div>
//         </div>
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
//         <div className="modal modal_viewer">
//             <div className="modal__content modal__content_viewer">
//                 <button type="button" className="modal__button-close"></button>
//                 <img src="#" className="modal__photo" alt="Картинка" />
//                 <h2 className="modal__title">модалТайтлВхтмл</h2>
//             </div>
//         </div>
//         <div className="overlay"></div>
//         <template id="card" className="template-card">
//             <li className="card">
//                 <img src="#" className="card__photo" alt="Картинка" />
//                 <button type="button" className="card__delete"></button>
//                 <div className="card__text">
//                     <h2 className="card__title">кардТайтлВхтмл</h2>
//                     <div className="card__like-container">
//                         <button type="button" className="card__like"></button>
//                         <p className="card__like-data"></p>
//                     </div>
//                 </div>
//             </li>
//         </template>