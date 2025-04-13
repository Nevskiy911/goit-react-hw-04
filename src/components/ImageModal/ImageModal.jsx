import s from "./ImageModal.module.css";

const Modal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeBtn} onClick={onClose}>
          &times;
        </button>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={s.image}
        />
      </div>
    </div>
  );
};

export default Modal;
