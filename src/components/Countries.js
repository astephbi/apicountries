import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "16px",
  };
  const [countries, setCountries] = useState([]);
  // the brackets inside the useState are really important, it sets the value of the country array when the component is mounted
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <div style={container}>
      {countries.map((country, key) => (
        <Card key={key} country={country} /> 
        //Cannot convert undefined or null to object : this error is thrown because of the brackets
      ))}
    </div>
  );
};

export default Countries;
