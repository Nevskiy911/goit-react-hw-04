import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <ul className={s.gallery}>
        {images.map((image) => (
          <li key={image.id} className={s.item}>
            <img
              src={image.urls.small}
              alt={image.alt_description}
              onClick={() => openModal(image)}
            />
          </li>
        ))}
      </ul>
      <ImageModal image={selectedImage} onClose={closeModal} /> {}
    </div>
  );
}
