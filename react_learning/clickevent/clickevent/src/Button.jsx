function Button() {
  let count = 0;

  const handleDoubleclick = (e) => {
    e.target.textContent = "double clicked";
  };

  const handleclick = () => {
    const v = document.getElementById("heading");

    if (count === 0) {
      v.textContent = "you have completed it ";
      count++;
    }
    if (count === 1) {
      v.textContent = "you can continue later  ";
      count++;
    } else {
      v.textContent = "you have too do it   ";
      count++;
    }
  };
  return (
    <>
      <h1 id="heading"> This video is about React Click event </h1>

      <button
        onClick={() => {
          handleclick();
        }}
        onDoubleClick={(e) => {
          handleDoubleclick(e);
        }}
      >
        {" "}
        Click me{" "}
      </button>
    </>
  );
}

export default Button;
