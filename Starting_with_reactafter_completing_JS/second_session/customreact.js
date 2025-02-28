
const reactElement ={
  type :'a' ,
  props:{
      href :'https://google.com',
      target : '_blank',
  },
  children: 'click to visit google'
}

// function customrender(reactElement , root)
// {
//     const element= document.createElement(reactElement.type)
//     element.innerHTML = reactElement.children
//     element.setAttribute('href',reactElement.props.href)
//     element.setAttribute('target',reactElement.props.target);  
//     root.appendChild(element);
// }


function customrender(reactElement , root)
{

const domElement = document.createElement(reactElement.type)
domElement.innerHTML= reactElement.children
for( const prop in reactElement.props )
{
  if( prop === 'children' )
    continue;
  
  domElement.setAttribute(prop , reactElement.props[prop]);
}

root.appendChild(domElement);
}


const root = document.querySelector('#root');

customrender( reactElement ,  root);





