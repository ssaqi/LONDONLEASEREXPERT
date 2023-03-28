import React from 'react'
import'./Avail.css'
import download from '../Assest/img1.jpg'
import Play from '../Assest/ply.png'
import App from '../Assest/playStore.png'
function Avail() {
  return (
     
    <>
    <div class="card text-bg-dark">
    <img src={download} class="img-fluid" alt="download"></img>
  
    <div class="card-img-overlay many">

<div className='one'>
    <p className='text-dark' style={{
        marginTop: "16%",
       left:"150px",
       position:"absolute" }}>Download the <b> Expert App Now!</b></p>
      <button 
      style={{
        marginTop: "20%",
       left:"130px",
       position:"absolute" }}>
    <img src={Play} alt="Appstore" className='img' />
      </button>
      <button  className='bt'
      style={{marginTop: "20%",
       left:"280px",
       position:"absolute" }}
       >
        <img src={App} alt="Playstore" className='img'/>
    </button>
  </div>

<div className='container'>
  <div className='two'>
     <div><button  className='two'>
        <img src={Play} alt="Playstore" className='img'/>
    </button></div>
     <div>
     <button  className='two'>
        <img src={App} alt="Playstore" className='img'/>
    </button>
     </div>
     </div></div>

  </div>
  </div>

    </>

  )
}

export default Avail