import s from "./ImageCard.module.css";

export default function ImageCard({ image, onClick }) {
  return (
    <li className={s.card} onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.alt_description || "Image"} />
    </li>
  );
}
