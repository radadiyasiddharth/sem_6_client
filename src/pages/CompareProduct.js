import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import watch from "../assets/images/watch.jpg"
import cross from "../assets/images/cross.svg"
import Color from '../components/Color'

const CompareProduct = () => {
    return (
        <>
            <Meta title="Compare Products" />
            <BreadCrumb title="Compare Products"></BreadCrumb>
            <div className="compare-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src={cross} alt="cross" className="img-fluid cross position-absolute" />
                                <div className="product-card-image">
                                    <img src={watch} alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">Olympus pen E-PL9 kit with 14-42, EZ lens, camera</h5>
                                    <h6 className="price my-3">$100</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src={cross} alt="cross" className="img-fluid cross position-absolute" />
                                <div className="product-card-image">
                                    <img src={watch} alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">Olympus pen E-PL9 kit with 14-42, EZ lens, camera</h5>
                                    <h6 className="price my-3">$100</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProduct
