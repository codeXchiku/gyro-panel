import React, { useState } from 'react'
import Container from '../Container'

const Navbar = () => {
const [nav,setNav]=useState("button1");
  const handleButtonClick =(button)=>{
    setNav(button)
  }
  return (
 
    <>
    <div style={{display:'flex'}}>
    <button onClick={()=>handleButtonClick('button1')}>Quick</button>
    <button onClick={()=>handleButtonClick('button2')}>Action</button>
    <button onClick={()=>handleButtonClick('button3')}>Message</button>
    <button onClick={()=>handleButtonClick('button4')}>PreFlight</button>
    <button onClick={()=>handleButtonClick('button5')}>Gauges</button>
    <button onClick={()=>handleButtonClick('button6')}>Drone ID</button>
    <button onClick={()=>handleButtonClick('button7')}>Transponder</button>
    <button onClick={()=>handleButtonClick('button8')}>Status</button>
    <button onClick={()=>handleButtonClick('button9')}>Servo/Relay</button>
    <button onClick={()=>handleButtonClick('button10')}>Aux Function</button>
    <button onClick={()=>handleButtonClick('button11')}>Scripts</button>
    <button onClick={()=>handleButtonClick('button12')}>Payload Control</button>
    <button onClick={()=>handleButtonClick('button13')}>Telemetry Logs</button>
    <button onClick={()=>handleButtonClick('button14')}>Dataflash Logs</button>
    </div>
   
    <Container buttonId={nav}></Container>
    </>
  )
}

export default Navbar