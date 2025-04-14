import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={s.gallery}>
      {images.map((img) => (
        <ImageCard key={img.id} image={img} onClick={onImageClick} />
      ))}
    </ul>
  );
}
