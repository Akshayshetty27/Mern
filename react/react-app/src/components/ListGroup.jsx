// function ListGroup()
// {
// return( <div>
// <ul className="list-group">
//   <li className="list-group-item">An item</li>
//   <li className="list-group-item">A second item</li>
//   <li className="list-group-item">A third item</li>
//   <li className="list-group-item">A fourth item</li>
//   <li className="list-group-item">And a fifth one</li>
// </ul>
// </div>
// );
// }
// export default ListGroup;
function ListGroup()
{
    const items=[
        'New york',
        'India',
        'Paris',
        'London'
    ];
var selectedItem=0;
    if(items.length > 4)
    {
        return<div>
            <ul className="list-group">
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
   </ul>
        </div>
    }
return<div>
    <h1> This is list of Elements :</h1>
    <ul className="list-group">
    {
    items.map((item,index) => 
    <li className={selectedItem === index ? 'list-group-item active ': 'list-group-item'}
    key={item} 
    onClick={selectedItem=index}
    > {item}  </li>
    )}
    </ul>

</div>

}

export default ListGroup;