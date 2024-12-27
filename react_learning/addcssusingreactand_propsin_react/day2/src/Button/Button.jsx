// import second from './Button.module.css'
function Button()
{

    const styles={
        backgroundColor:"hsl(200, 56%, 40%)",
        border: "none",
        padding: "10px 10px",
        margin: "50px 10px",
        cursor :"pointer",
        
      
    }

    return(
        <>

        <button style={styles}> Click me </button>

        </>
    )
}
export default Button;