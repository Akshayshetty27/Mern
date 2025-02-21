// var root=document.querySelector("#root");
// var h1=document.createElement('h1')
// h1.innerHTML="Hello from js"
// root.appendChild(h1)

var h1= React.createElemnt('h1',null,"hello from react js")
var parent=document.querySelector('#parent')
var root=ReactDOM.createRoot(parent)
root.render(h1)