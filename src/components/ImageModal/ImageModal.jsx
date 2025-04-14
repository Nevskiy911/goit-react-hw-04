import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, image, onRequestClose }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <button onClick={onRequestClose} className={s.closeButton}>
        &times;
      </button>
      <img
        src={image.urls.full}
        alt={image.alt_description || "Image"}
        className={s.image}
      />
    </Modal>
  );
}
