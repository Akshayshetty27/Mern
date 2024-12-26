import myimg from './assets/myimg.jpg';
function Card()
{
    return(
        <>
      <div className="card">
      <img  className='cardimg' src={myimg} alt="this is me ">
      </img>
      <h2 className='title' > Akshay A Shetty</h2>
      <p> I  am a Enginnering  Student at Mite in the Inforamation Science And Engineering  Branch with cgpa of 8.60</p>
        </div>
        </>
    );
}

export default Card;