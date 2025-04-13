import s from "./LoadMoreBtn.module.css";

export default function LoadMoreButton({ onClick }) {
  return (
    <button onClick={onClick} className={s.btn}>
      Load More
    </button>
  );
}
