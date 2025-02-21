function Profile() {
  const image = "./src/assets/react.svg";
  //   let count = 0;
  const handleclick = (e) => {
    e.target.style.height = "400px";
    e.target.style.width = "auto";
  };
  return <img onClick={(e) => handleclick(e)} src={image}></img>
  
}
export default Profile;
