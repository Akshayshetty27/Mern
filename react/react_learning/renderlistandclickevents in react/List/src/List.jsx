function List(props) {
  // const fruits = [
  //   { id: 1, name: "apple", calories: 150 },
  //   { id: 2, name: "orange", calories: 45 },
  //   { id: 3, name: "banana", calories: 170 },
  //   { id: 4, name: "pineapple", calories: 50 },
  // ];
  // fruits.sort((a, b) => a.name.localeCompare(b.name));
  // fruits.sort((a, b) => a.calories - b.calories);

  // const names = fruits.map((fruit) => (
  //   <li key={fruit.id}>
  //     {fruit.name} : <b>{fruit.calories}</b>
  //   </li>
  // ));

  // const highcalfruits = fruits.filter((fruit) => fruit.calories >= 100);

  // const listitem = highcalfruits.map((highcalfruits) => (
  //   <li key={highcalfruits.id}>
  //     {highcalfruits.name} : {highcalfruits.calories}{" "}
  //   </li>
  // ));

  // const lowcalfruits = fruits.filter((fruit) => fruit.calories <= 100);

  // const lowcallist =lowcalfruits.map((lowcalfruits) => {
  //   <li key={lowcalfruits.id}>
  //     {lowcalfruits.name} : {lowcalfruits.calories}
  //   </li>;
  // });

  const itemlist = props.items;

  const listItem = itemlist.map((fruit) => {
    <li key={fruit.id}>
      {" "}
      {fruit.name} {fruit.calories}{" "}
    </li>;
  });

  return (
    <>
      {/* <h2> Fruits :</h2>
      <ol>{names}</ol>
      <h2> high calories fruits</h2>
      <ol> {listitem}</ol>

      <h2>Low calories food</h2>
      <ul>{lowcallist}</ul> */}

      <h1> Fruits</h1>
      <ol>{listItem}</ol>
    </>
  );
}

export default List;
