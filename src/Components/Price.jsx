import styling from "./Price.module.css";

function Price({ NewPrice, OldPrice }) {
  return (
    <div className={styling.price}>
      <div style={{ display: "flex" }}>
        <h2>${NewPrice}</h2>
      </div>
      <div style={{ display: "flex", color: "red" }}>
        <h2>
          <strike>${OldPrice}</strike>
        </h2>
      </div>
      <div style={{ display: "flex" }} className={styling.order}>
        <button>ORDER</button>
      </div>
    </div>
  );
}

export default Price;
