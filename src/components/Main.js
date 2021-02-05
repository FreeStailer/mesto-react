import React from 'react';
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
    //стейты
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserData()
        .then((res) => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
        })
        .catch((err) => {
            console.log('Ошибочка в получении данных пользователя: ', err);
        })
        api.getInitialCards()
        .then((res) => {
            setCards(res)
        })
        .catch((err) => {
            console.log('Ошибочка в получении списка карточек: ', err);
        })
    }, [])
    
    return (
        <main className="main">
              <section className="profile">
                  <div className="profile__card">
                      <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}>
                          <button className="profile__avatar profile__avatar-edit-button" type="button" onClick={props.onEditAvatar}></button>
                      </div>
                      <div className="profile__info">
                          <h1 className="profile__name">{userName}</h1>
                          <button type="button" className="profile__button-edit" onClick={props.onEditProfile}></button>
                          <p className="profile__comment">{userDescription}</p>
                      </div>
                  </div>
                  <button type="button" className="profile__button-add" onClick={props.onAddPlace}></button>
              </section>
              <section>
                  <ul className="cards">
                    {cards.map((card) => (
                        <Card card={card} key={card._id} onCardClick={props.onCardClick} onDelClick={props.onDelClick}/>
                    ))}
                  </ul>
              </section>
          </main>
    );
  }
  
export default Main; 

    //const [userData, setUserData] = React.useState({userName: '', userAvatar: '', userDescription: ''});
    //
    //из THENa
    //setUserData({userName: res.name, userAvatar: res.avatar, userDescription: res.about})
    //
    // из ДОМ
    // <div className="profile__avatar" style={{ backgroundImage: `url(${userData.userAvatar})` }}>
    //     <button className="profile__avatar profile__avatar-edit-button" type="button" onClick={props.onEditAvatar}></button>
    // </div>
    // <div className="profile__info">
    //     <h1 className="profile__name">{userData.userName}</h1>
    //     <button type="button" className="profile__button-edit" onClick={props.onEditProfile}></button>
    //     <p className="profile__comment">{userData.userDescription}</p>
    // </div>