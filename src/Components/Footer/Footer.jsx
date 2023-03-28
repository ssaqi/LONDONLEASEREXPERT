import React from 'react'
import'./Footer.css'
function Footer() {
  return (
    <>
    <footer className=" text-center text-lg-start " style={{backgroundColor:"#304c7a"}}>
  {/* Grid container */}
  <div className="container p-4">
    {/*Grid row*/}
    <div className="row">
      {/*Grid column*/}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-upperlowercase text-white">Medical</h5>
        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-white">
            Plasma Hair Regrowth
            </a>
          </li>
          <li>
            <a href="#!" className="text-white">
            Plasma Dark Circles
            </a>
          </li>
          <li>
            <a href="#!" className="text-white">
            Vampire Facial
            </a>
          </li>
          <li>
            <a href="#!" className="text-white">
            Mesotherapy Facial
            </a>
          </li>
        </ul>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-upperlower case mb-0 text-white">Blemishes</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#!" className="text-white">
            Skin Tag Removal
            </a>
          </li>
          <li>
            <a href="#!" className="text-white">
            Milia Removal
            </a>
          </li>
          <li>
            <a href="#!" className="text-white">
            Wart Removal

            </a>
          </li>
          {/* <li>
            <a href="#!" className="text-white">
              Link 4
            </a>
          </li> */}
        </ul>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-upperlowercase text-white">Rejuvenation</h5>
        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-white">
            IPL Photo Facial
            </a>
          </li>
          <li>
            <a href="#!" className="text-white">
            Glycolic Peel
            </a>
          </li>
          <li>
            <a href="#!" className="text-white">
            Microdermabrasion
            </a>
          </li>
          <li>
            <a href="#!" className="text-white">
            Microneedling
            </a>
          </li>
        </ul>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-upperlowercase mb-0 text-white">Vascular</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#!" className="text-white">
            IPL Rosacea Treatment
            </a>
          </li>
          <li>
            <a href="#!" className="text-white">
            Laser Vein Removal
            </a>
          </li>
          {/* <li>
            <a href="#!" className="text-dark">
              Link 3
            </a>
          </li> */}
          {/* <li>
            <a href="#!" className="text-dark">
              Link 4
            </a>
          </li> */}
        </ul>
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  
  <div
    className="text-start p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color : "#fff" }}
  >
  <div className='container'>
    © Design 
    <a className="text-white" href="#">
    & Empowered by Expert
    </a>
    </div>
  </div>
  {/* Copyright */}
</footer>

    
    
    </>
  )
}

export default Footer