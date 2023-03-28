import React from 'react'
import youtube from '../Assest/media.JPG'
import'./Video.css'
function Video() {
  return (
    <>
    
   <div className='container my-5'> 
    <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          <ul>
         <li><p>You can now book Laser Hair Removal treatment instantly.</p></li>
         <li> <p> Manage your appointment, edit and cancel anytime you want.</p></li>
         <li> <p> Rest assured you’ll book with the best clinics and Experts.</p></li>
         <li> <p> Most Affordable Laser Hair Removal Prices.</p></li>
         <li> <p> Suitable for Men, Women, all Skin and Hair Types.</p></li>
         <li> <p> Reduction of Ingrown Hairs, pigment spots, shaving bumps.</p></li>

          </ul>
          
        </p>
      
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          
          <img src={youtube} alt="VIDEO" className='video' />
             
        </p>
    
      </div>
    </div>
  </div>
</div>
</div>
    
    
    </>
  )
}

export default Video