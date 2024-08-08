import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton'

function App() {
  const [count, setCount] = useState(0)

  const handleClick=()=>{
    console.log("Click me");
  }
  const handleSubmit=()=>{
    alert ("clicked on submit");
  }
  const handlePayment=()=>{
    console.log("clicked on Payment");
  }
  const handleCart=()=>{
    console.log("clicked on cart");
  }

  return (
    <>
      <MyButton buttonText="click me" bgColor="pink" onClick={handleClick}/>
      <MyButton buttonText="submit" bgColor="red" onClick={handleSubmit}/>
      <MyButton buttonText="payment" bgColor="blue" onClick={handlePayment}/>
      <MyButton buttonText="cart" bgColor="yellow" onClick={handleCart}/>
    </>
  )
}

export default App
