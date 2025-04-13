import s from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return (
    <div className={s.error}>
      <p>{message || "Something went wrong..."}</p>
    </div>
  );
}
