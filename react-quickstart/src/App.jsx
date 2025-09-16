import './App.css'

function Component1(){
return(
<><h1>HELLO WORLD</h1></>
)}
let num1= "Hello";

function Component2(){
return(
<>
<h1>This is component 2 and nested below is component 1</h1>
<Component1/>
</>
)}

if(true){
num1="Hi";
}
else{
num1="Low";
}
function App() {
  return (
    <>
     <Component1/>
     <h1>=====================</h1>
     <h1>Below is component 2</h1>
     <Component2/>
     <div><p> This is a markup</p></div>
     <h1 style={{color: "red"}}> This text is styled with color red </h1>
     <h1>This is a data of num1 variable: {num1}</h1>
    </>
  )
}

export default App
