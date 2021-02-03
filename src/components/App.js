import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';


function App() {
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
}

// const [isEditAvatarPopupOpen, setIsEditAvatarClick] = React.useState(false);
// function handleEditAvatarClick() {
//     setIsEditAvatarClick(true)
// }

// const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
// function handleAddPlaceClick() {
//     setIsAddPlacePopupOpen(true)
// }




  return (
    <div>
        <div className="page__content">
          <Header />
          <Main onEditProfile={handleEditProfileClick} />
          <Footer />
          <PopupWithForm isOpen={isEditProfilePopupOpen}  />
        </div>
    </div>
  );
}

export default App;
