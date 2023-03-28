import React from 'react'
import'./Contain.css'
import icon1 from'../Assest/instant-booking.png'
import icon2 from'../Assest/affordable-prices.png'
import icon3 from'../Assest/trusted.png'

function Contain() {
  return (
    <>
  
    <div className='container can'>

     <center>
        <h5>Why choose <span style={{color:"red"}}>Expert?</span> </h5>
     </center>
   <br/><br/>

    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={icon1} className="card-img-top icon1" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">Instant Booking</h5>
        <p className="card-text text-center">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={icon2} className="card-img-top icon1 " alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">Affordable prices</h5>
        <p className="card-text text-center">
          This card has supporting text below as a natural lead-in to additional
          content.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={icon3} className="card-img-top icon1" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">Vetted Trusted Experts</h5>
        <p className="card-text text-center">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
    
    
    </>

  )
}

export default Contain