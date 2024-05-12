import style from "./Feedback.module.css";
function Feedback({ good, neutral, bad, total, positiv }) {
  return (
    <div>
      <p className={style.page}>Good: {good}</p>
      <p className={style.page}>Neutral: {neutral}</p>
      <p className={style.page}>Bad: {bad}</p>
      <p className={style.page}>Total: {total}</p>
      <p className={style.page}>Positive: {positiv}%</p>
    </div>
  );
}
export default Feedback;
