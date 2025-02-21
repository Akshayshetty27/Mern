import { useState } from "react";

function Carcomponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function Handlechangeyear(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function Handlechangemodel(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  function Handlechangemake(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  //   setCar("2024","Ford","Mustang");

  return (
    <div>
      <p>
        Your favirate car is : {car.model} cars maker is : {car.make} car model
        startd : {car.year}
      </p>

      <input type="number" value={car.year} onChange={Handlechangeyear} />
      <input type="text" value={car.model} onChange={Handlechangemodel} />
      <input type="text" value={car.make} onChange={Handlechangemake} />
    </div>
  );
}
export default Carcomponent;
