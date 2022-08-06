import '../index.css';

function PopupWithForm(props) {
  return(
    <div className={props.card ? `popup popup_${props.name} popup_active` : `popup popup_${props.name}`}>
      <div className="popup__content">
        <button className="popup__close" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} method="post" noValidate>
          {props.children}
          <button className="popup__save popup__save_edit-profile" type="submit" disabled>{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;