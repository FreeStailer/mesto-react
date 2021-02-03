function Main(props) {
    return (
        <main className="main">
              <section className="profile">
                  <div className="profile__card">
                      <div className="profile__avatar">
                          <button className="profile__avatar profile__avatar-edit-button" type="button"></button>
                      </div>
                      <div className="profile__info">
                          <h1 className="profile__name">Жак</h1>
                          <button type="button" className="profile__button-edit" onClick={props.onEditProfile}></button>
                          <p className="profile__comment">Водоплавующий</p>
                      </div>
                  </div>
                  <button type="button" className="profile__button-add"></button>
              </section>
              <section>
                  <ul className="cards">

                  </ul>
              </section>
          </main>
    );
  }
  
export default Main; 