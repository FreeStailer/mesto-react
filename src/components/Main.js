import React from 'react';
import api from "../utils/Api.js";

function Main(props) {
    const [userData, setUserData] = React.useState({userName: '', userAvatar: '', userDescription: ''});
    
    React.useEffect(() => {
        api.getUserData()
        .then((res) => {
            setUserData({userName: res.name, userAvatar: res.avatar, userDescription: res.about})
        })
        .catch((err) => {
            console.log('Ошибочка в получении данных пользователя: ', err);
        })
    })
    
    return (
        <main className="main">
              <section className="profile">
                  <div className="profile__card">
                      <div className="profile__avatar" style={{ backgroundImage: `url(${userData.userAvatar})` }}>
                          <button className="profile__avatar profile__avatar-edit-button" type="button" onClick={props.onEditAvatar}></button>
                      </div>
                      <div className="profile__info">
                          <h1 className="profile__name">{userData.userName}</h1>
                          <button type="button" className="profile__button-edit" onClick={props.onEditProfile}></button>
                          <p className="profile__comment">{userData.userDescription}</p>
                      </div>
                  </div>
                  <button type="button" className="profile__button-add" onClick={props.onAddPlace}></button>
              </section>
              <section>
                  <ul className="cards">

                  </ul>
              </section>
          </main>
    );
  }
  
export default Main; 