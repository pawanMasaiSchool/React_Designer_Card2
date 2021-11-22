import styling from "./Image.module.css";

function myImg({ source }) {
  return <img src={source} className={styling.myImage} />;
}

export default myImg;
