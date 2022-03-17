import React from 'react'

function Dest(props) {
  return (
    <div>
   <div className='from'>

       <p style={{color:"gray",margin:"8px",padding:"8px",borderRadius:"1px",border:"2px solid #f1a63d",width:"125px",height:"60px",fontSize:"12px"}}>{props.id}</p>
       <p style={{color:'black',fontWeight:"bold",position:"absolute",top:"100px",padding:"8px",marginLeft:"8px"}}>{props.name}</p>
   </div>


    </div>


  )
}

export default Dest