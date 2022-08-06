import React from 'react';
import '../index.css';
import { api } from '../utils/api';

import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]); 

  React.useEffect(() => {
        
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch(err => {
        console.log(err);
    });
  }, []);

  return(
    <>
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Аватар" onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
          <p className="profile__information">{userDescription}</p>
        </div>
          <button className="profile__add-button" type="button" aria-label="Добавить фото" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__team">
        {cards &&
            cards.map((card) => {
              return (
                <Card card={card} key={card._id} name={card.name} link={card.link} likes={card.likes.length} onCardClick={props.onCardClick} />
              );
            })}
        </ul>
      </section>
    </>
  )
}

export default Main;