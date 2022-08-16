import React from 'react';
import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {

  const [name, setName] = React.useState('');
  const [description , setDescription] = React.useState('');

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

const currentUser = React.useContext(CurrentUserContext);

// После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
React.useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser]);

function handleSubmit(e) {
  // Запрещаем браузеру переходить по адресу формы
  e.preventDefault();

  // Передаём значения управляемых компонентов во внешний обработчик
  props.onUpdateUser({
    name,
    about: description,
  });
}

  return(
    <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
      children={<>
        <input
          id="name-input"
          className="popup__input popup__input_type_name"
          type="text"
          name="name"
          required
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          value={name || ''}
          onChange={handleChangeName}
        />
        <label htmlFor="name-input"><span className="popup__error" id="name-input-error"></span></label>
        <input
          id="information-input"
          className="popup__input popup__input_type_information"
          type="text"
          name="information"
          required minLength="2"
          maxLength="200"
          placeholder="О себе"
          value={description || ''}
          onChange={handleChangeDescription}
          />
        <label htmlFor="information-input"><span className="popup__error" id="information-input-error"></span></label>
      </>}
    />
  )
}

export default EditProfilePopup;