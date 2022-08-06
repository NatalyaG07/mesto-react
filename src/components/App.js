import '../index.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';

function App() {

  const [isEditProfilePopupOpen, satIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, satIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, satIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    satIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    satIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    satIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
        link: card.link,
        name: card.name
    });
  }

  function closeAllPopups() {
    satIsEditProfilePopupOpen(false);
    satIsAddPlacePopupOpen(false);
    satIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />

      <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
        children={<>
          <input
            id="name-input"
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="40"
            placeholder="Имя" />
          <label htmlFor="name-input"><span className="popup__error" id="name-input-error"></span></label>
          <input
            id="information-input"
            className="popup__input popup__input_type_information"
            type="text"
            name="information"
            required minLength="2"
            maxLength="200"
            placeholder="О себе" />
          <label htmlFor="information-input"><span className="popup__error" id="information-input-error"></span></label>
        </>}
      />

      <PopupWithForm name="add-card" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
        children={<>
          <input
            id="title-input"
            className="popup__input popup__input_type_title"
            type="text"
            name="title"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30" />
          <label htmlFor="title-input"><span className="popup__error" id="title-input-error"></span></label>
          <input
            id="url-input"
            className="popup__input popup__input_type_link"
            type="url"
            name="link"
            placeholder="Ссылка"
            required />
          <label htmlFor="url-input"><span className="popup__error" id="url-input-error"></span></label>
        </>} 
      />

      <PopupWithForm name="with_confirmation" title="Вы уверены?" />

      <PopupWithForm name="update_avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
        children={<>
          <input
            id="avatar-link"
            className="popup__input"
            type="url"
            name="link"
            placeholder="Ссылка"
            required />
          <label htmlFor="avatar-link"><span className="popup__error" id="avatar-link-error"></span></label>
        </>} 
      />

      <ImagePopup name="img-card" card={selectedCard} onClose={closeAllPopups} />

      {/* 

          <div className="popup popup_with_confirmation">
            <div className="popup__content">
              <button className="popup__close" type="button"></button>
              <h2 className="popup__title popup__title_with_confirmation">Вы уверены?</h2>
              <button className="popup__save popup__save_with_confirmation" type="button">Да</button>
            </div>
          </div> */}
    </div>
  );
}

export default App;
