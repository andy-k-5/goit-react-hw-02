import style from "./Options.module.css";
function Options({ updateFeedback, total, resetFeedback }) {
  return (
    <div>
      <button className={style.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={style.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={style.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={style.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
