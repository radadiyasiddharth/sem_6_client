import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import watch from "../assets/images/watch.jpg"
import cross from "../assets/images/cross.svg"

const Wishlist = () => {
  return (
    <>
       <Meta title="Wishlist" />
       <BreadCrumb title="Wishlist"></BreadCrumb>
       <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card position-relative ">
                    <img src={cross} alt="cross" className="img-fluid cross position-absolute" />
                        <div className="wishlist-card-image">
                            <img src={watch} className='img-fluid w-100' alt="watch" />
                        </div>
                      <div className='py-3 px-3'>
                      <h5 className="title">Olympus pen E-PL9 kit with 14-42, EZ lens, camera</h5> 
                      <h6 className="price">$ 100</h6>
                      </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative ">
                    <img src={cross} alt="cross" className="img-fluid cross position-absolute" />
                        <div className="wishlist-card-image">
                            <img src={watch} className='img-fluid w-100' alt="watch" />
                        </div>
                      <div className='py-3 px-3'>
                      <h5 className="title">Olympus pen E-PL9 kit with 14-42, EZ lens, camera</h5> 
                      <h6 className="price">$ 100</h6>
                      </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative ">
                    <img src={cross} alt="cross" className="img-fluid cross position-absolute" />
                        <div className="wishlist-card-image">
                            <img src={watch} className='img-fluid w-100' alt="watch" />
                        </div>
                      <div className='py-3 px-3'>
                      <h5 className="title">Olympus pen E-PL9 kit with 14-42, EZ lens, camera</h5> 
                      <h6 className="price">$ 100</h6>
                      </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Wishlist
