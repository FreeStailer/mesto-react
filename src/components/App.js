import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div>
      <div class="page__content">
          <Header />
          <Main />
          <Footer />
      </div>
      <div id="edit" class="modal modal_profile">
        <div class="modal__content">
            <button type="button" class="modal__button-close"></button>
            <h2 class="modal__heading">Редактировать профиль</h2>
            <form id="edit-profile" class="form" action="#" name="Edit profile" method="GET">
                <fieldset class="form__input">
                    <label for="name" class="form__label">
                        <input placeholder="Имя" type="text" name="name" id="name" class="form__item" value="name" required minlength="2" maxlength="40" />
                        <span class="form__input-error" id="name-error"></span>
                    </label>
                    <label for="about" class="form__label">
                        <input placeholder="комментарии" type="text" id="about" name="about" class="form__item" value="about" required minlength="2" maxlength="200" />&nbsp;         
                        <span class="form__input-error" id="about-error"></span>
                    </label>
                    <button type="submit" class="form__button">Сохранить</button>
                </fieldset>
            </form>
        </div>
    </div>
    <div id="photo-add" class="modal modal_card">
        <div class="modal__content">
            <button type="button" class="modal__button-close"></button>
            <h2 class="modal__heading">Новое место</h2>
            <form id="load-cards" class="form" action="#" name="Load_cards" novalidate>
                <fieldset class="form__input">
                    <label for="title" class="form__label">
                        <input type="text" name="title" id="title" class="form__item" placeholder="Название" required minlength="1" maxlength="30" />
                        <span class="form__input-error" id="title-error"></span>
                    </label>
                    <label for="photo" class="form__label">
                        <input type="url" id="photo" name="link" class="form__item" placeholder="Ссылка на картинку" required/>&nbsp;         
                        <span class="form__input-error" id="link-error"></span>
                    </label>
                    <button type="submit" class="form__button" disabled>Создать</button>
                </fieldset>        
            </form>
        </div>
    </div>
    <div id="avatar-add" class="modal modal_card">
        <div class="modal__content">
            <button type="button" class="modal__button-close"></button>
            <h2 class="modal__heading">Обновить аватар</h2>
            <form id="load-avatar" class="form" action="#" name="Load_avatar" novalidate>
                <fieldset class="form__input">
                    <label for="avatar" class="form__label">
                        <input type="url" id="avatar" name="avatar" class="form__item" placeholder="Ссылка на аватар" required />&nbsp;         
                        <span class="form__input-error" id="avatar-error"></span>
                    </label>
                    <button type="submit" class="form__button" disabled>Сохранить</button>
                </fieldset>        
            </form>
        </div>
    </div>
    <div id="del-popup" class="modal modal_card">
        <div class="modal__content">
            <button type="button" class="modal__button-close"></button>
            <h2 class="modal__heading">Вы уверены?</h2>
            <form class="form" action="#" novalidate>
                <fieldset class="form__input">
                    <button type="submit" class="form__button">Да</button>
                </fieldset>        
            </form>
        </div>
    </div>
    <div class="modal modal_viewer">
        <div class="modal__content modal__content_viewer">
            <button type="button" class="modal__button-close"></button>
            <img src="#" class="modal__photo" alt="Картинка" />
            <h2 class="modal__title">модалТайтлВхтмл</h2>
        </div>
    </div>
    <div class="overlay"></div>
    <template id="card" class="template-card">
        <li class="card">
            <img src="#" class="card__photo" alt="Картинка" />
            <button type="button" class="card__delete"></button>
            <div class="card__text">
                <h2 class="card__title">кардТайтлВхтмл</h2>
                <div class="card__like-container">
                    <button type="button" class="card__like"></button>
                    <p class="card__like-data"></p>
                </div>
            </div>
        </li>
    </template>
    </div>
  );
}

export default App;
