import React from 'react'

const MyButton = (props) => {
    const {buttonText:text,bgColor:color,onClick}=props;
    const handleClick=()=>{
        console.log("click me");
    }
  return (
    <button style={{backgroundColor:color}} onClick={onClick}>{text}</button>
  )
}

export default MyButton