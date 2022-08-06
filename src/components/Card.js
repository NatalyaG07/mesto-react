import '../index.css';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return(
    <article className="elements__iteam">
      <img className="elements__img" src={props.link} alt={props.name} onClick={handleClick} /> 
      <button className="elements__remove" type="button" aria-label="Удалить"></button>
      <div className="elements__info">
        <h2 className="elements__title">{props.name}</h2>
        <div className="elements__like-group">
          <button className="elements__like" type="button" aria-label="Лайк"></button>
          <h3 className="elements__like-counter">{props.likes}</h3>
        </div>
      </div>
    </article>
  )
}

export default Card;

