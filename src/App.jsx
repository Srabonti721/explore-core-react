import { useState } from 'react'
import './App.css'
import ToDo from './ToDo'
import Test from "./text"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h2>vite + react</h2>
<ToDo name="loren react" isDown = {true} time = "30 second"></ToDo>
<ToDo name="explore js" isDown = {true} time = "30 second"></ToDo>
<ToDo name="react is down and take a small rest" isDown ={false}></ToDo>
<Test></Test>

{/* <Player name="sakib" run="5000"></Player>
<Player name="tamim" ></Player>
<Salami name="EID" taka="1000"></Salami>
<Salami name="Going another place"></Salami> */}
{/* <Products name="samsung" price = "34000" brand ="sam"></Products>
<Products name="iphone" price="198000" brand ="apple"></Products>
<Products name="vivo" price="16000" brand ="jani na"></Products>
<Products name="realme" price = "14000" brand ="jani na"></Products>
<Students name="saju" dep="electrical"></Students>
<Students name="sonjoi" dep="computer"></Students>
<Person></Person>
<Sports></Sports> */}

    </>
  )
}
function Salami ({name, taka = 0}){
  return(
   <div className='student'>
     <h2>spacel ocation for: {name}</h2>
    <p>amount : {taka}</p>
   </div>
  )
}


function Player ({name, run = 1000}){
  console.log(name, run);
  
  return(
    <div className='shayerd'>
      <h3>name : {name}</h3>
      <p>runs : {run}</p>
    </div>
  )
}


function Students (props){
  console.log(props);
  
  return(
    <div className='student'>
      <h3 style={personStyle}>name: {props.name}</h3>
      <p>Department: {props.dep}</p>
    </div>
  )
}
const personStyle ={
color: "red",

}
function Person(){
  const name = "sultana";
  const age = 23;
  return(
    <h3 style={personStyle}> Person name : {name} Person age : {age}</h3>
  )
}

function Sports (){
  return(
    <div style={{
      margin:"10px",
      border:'2px solid red', 
      borderRadius: "5px",
      padding:'10px'
    }}>
      <h4>play to another sports</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta officiis magnam assumenda, placeat dolores voluptate harum doloribus at asperiores magni, illum similique reprehenderit, quod nostrum eius perferendis saepe ex?</p>
    </div>
  )
}

function Products (props){
console.log(props);

  return(
    <div style={{
      color:"white",
      backgroundColor:"tomato",
      border:"2px solid red", 
      margin: "10px", 
      padding: "15px", 
      borderRadius: "20px"
    }}>
      <h2>Product name : {props.name}</h2>
      <h3>Price : {props.price}</h3>
      <h4>Brand : {props.brand}</h4>
      <p style={{color:"black"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum delectus deleniti est molestiae aut velit, porro dolore quia, esse et numquam dolor harum voluptatibus recusandae. Mollitia totam ipsam quia non?</p>
    </div>
  )
}
export default App
