import styling from "./Parameters.module.css";

function Parameters({ calories, PFC, temp }) {
  return (
    <div className={styling.paras}>
      <div style={{ display: "flex" }}>{calories} Cal</div>
      <div style={{ display: "flex" }}>P/F/C: {PFC}</div>
      <div style={{ display: "flex" }}>{temp}°C </div>
    </div>
  );
}

export default Parameters;
