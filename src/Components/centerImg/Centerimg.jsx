import React from 'react'
import './CenterImg.css'
import IMG1 from '../Assest/img4.png';
import Call from '../Assest/call-butt-01.png';
import Email from '../Assest/Email-butt-01.png';
import whats from '../Assest/wtsap-butt-01.png';
import Chat from '../Assest/chat-butt-01.png';
function Centerimg() {
  return (
    
    <>
        <div class="card ">
        <img src={IMG1} class="img-fluid" alt="..."/>
        <div class="card-img-overlay">
         <div className='container'> 
        <div className='call'>
         <div className='tittle'>
          <img src={Call} className="icon"/>
          <center><p className='cont'>Call</p></center>
         </div>
         <div className='tittle'>
         <img src={whats} className="icon"/>
         <center><p className='cont'>Wapp</p></center>
         </div>
         <div className='tittle'>
         <img src={Email} className="icon"/>
           <center><p className='cont'>Email</p></center>
         </div>
         <div className='tittle'>
         <img src={Chat} className="icon"/>
         <center><p className='cont'>Chat</p></center>
         </div>
         </div>
         </div>
        </div>
        </div>

    
    </>


  )
}

export default Centerimg