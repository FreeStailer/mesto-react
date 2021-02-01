function Main() {
    return (
        <main class="main">
              <section class="profile">
                  <div class="profile__card">
                      <div class="profile__avatar">
                          <button class="profile__avatar profile__avatar-edit-button" type="button"></button>
                      </div>
                      <div class="profile__info">
                          <h1 class="profile__name">Жак</h1>
                          <button type="button" class="profile__button-edit"></button>
                          <p class="profile__comment">Водоплавующий</p>
                      </div>
                  </div>
                  <button type="button" class="profile__button-add"></button>
              </section>
              <section>
                  <ul class="cards">

                  </ul>
              </section>
          </main>
    );
  }
  
export default Main; 