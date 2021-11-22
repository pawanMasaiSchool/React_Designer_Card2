import styling from "./Description.module.css";

function Description({ details }) {
  return (
    <div className={styling.DetailsDiv}>
      <p className={styling.details}>{details}</p>
    </div>
  );
}

export default Description;
