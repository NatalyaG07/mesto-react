import '../index.css';

function ImagePopup(props) {
  return(
    <div className={props.isOpen ? `popup popup_${props.name} popup_active` : `popup popup_${props.name}`}>
      <div className="popup__group">
        <button className="popup__close popup__close_img-card" type="button" onClick={props.onClose}></button>
        <img className="popup__img" src={props.card.link} alt={props.card.name} />
          <h2 className="popup__img-name">{props.card.name}</h2>
      </div>
    </div>
  )
}

export default ImagePopup;