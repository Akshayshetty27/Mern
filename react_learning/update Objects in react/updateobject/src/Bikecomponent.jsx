import { useState } from "react";

function Bikecomponent() {
  const [bike, setBike] = useState({
    name: "BMW",
    Model: "S1000RR",
    year: 2023,
  });
  function handleName(e) {
    setBike({ ...bike, name: e.target.value });
  }
  function handleYear(e) {
    setBike({ ...bike, year: e.target.value });
  }
  function handleModel(e) {
    setBike({ ...bike, Model: e.target.value });
  }
  return (
    <>
      <p>
        {" "}
        your faviorate bike : {bike.name} , model :{bike.Model} launched in{" "}
        {bike.year}
      </p>

      <input type="text" value={bike.name} onChange={handleName} />
      <input type="text" value={bike.Model} onChange={handleModel} />
      <input type="number" value={bike.year} onChange={handleYear} />
    </>
  );
}
export default Bikecomponent;
