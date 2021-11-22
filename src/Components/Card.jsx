import Image from "./Image";
import Title from "./Title";
import Description from "./Description";
import Parameters from "./Parameters";
import Price from "./Price";

function Card() {
  return (
    <div>
      <Image source="https://hips.hearstapps.com/del.h-cdn.co/assets/16/12/1458925668-delish-tortellini-bacon.jpg" />
      <Title title="Tortellini" />
      <Description details="Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon bolognese or marinara sauce." />
      <Parameters calories="270" PFC="18/4/41" temp="42.4" />
      <Price NewPrice="17.90" OldPrice="22.90" />
    </div>
  );
}

export default Card;
