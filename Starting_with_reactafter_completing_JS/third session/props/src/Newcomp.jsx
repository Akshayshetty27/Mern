function Newcomp({ username = "akshay", password = "pasword@123" }) {
  return (
    <>
      <br />
      <h1 className="text-sky-500 dark:text-sky-400"> Username :</h1>
      <p className="text-sky-500 dark:text-sky-400"> {username}</p>
      <h2 className="text-sky-500 dark:text-sky-400">Pasword : </h2>
      <p clasName="text-sky-500 dark:text-sky-400">{password}</p>
    </>
  );
}

export default Newcomp;
