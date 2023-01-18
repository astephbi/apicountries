import React from "react";
const Card = ({ country }) => {
  
  return (
    <div >
      <img src={country.flags.svg} alt="hello" height="230px" />
    </div>
  );
};

export default Card;
