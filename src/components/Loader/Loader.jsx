import s from "./Loader.module.css";
import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <ClipLoader className={s.loader} />
    </div>
  );
}
