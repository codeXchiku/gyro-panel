import React from 'react'

const Scripts = () => {
  return (
    <>
    <div style={{marginLeft:'1rem',height:'14rem'}} >
      <p>Script Status:No Script Running</p>
      <p style={{margin:'0px'}}>Selected Script:None</p>
      <div style={{display:'flex', margin:'0px'}}>
        <input type="checkbox" name="" id="" style={{marginRight:' 0.25rem'}}  />
        <p>Redirect Program Output</p>
      </div>
      <button style={{backgroundColor: 'rgb(132 204 22)',padding:'0.25rem'}}>Select Script</button>
    </div>
    </>
  )
}

export default Scripts