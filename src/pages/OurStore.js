import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta"
import watch from "../assets/images/watch.jpg"
import watch_01 from "../assets/images/watch_01.avif"
import gr1 from "../assets/images/gr.svg"
import gr2 from "../assets/images/gr2.svg"
import gr3 from "../assets/images/gr3.svg"
import gr4 from "../assets/images/gr4.svg"
import ReactStars from 'react-rating-stars-component';
import ProductCard from "../components/ProductCard"
import Color from '../components/Color'


const OurStore = () => {
    const[grid,setGrid] = useState(4)
    return (
        <div>
            <Meta title={"Our Store"} />
            <BreadCrumb title={"Our Store"}></BreadCrumb>
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Shop By Categories
                                </h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Filter By
                                </h3>
                                <div>
                                    <h5 className="sub-title">Avaliablity</h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" value="" id='' className='form-check-input' />
                                            <label htmlFor="" className='form-check-label'>In Stock (1)</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" value="" id='' className='form-check-input' />
                                            <label htmlFor="" className='form-check-label'>Out of Stock (0)</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating ">
                                            <input type="email" name="" className='form-control' id="floatingInput" placeholder='From' />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating ">
                                            <input type="email" name="" className='form-control' id="floatingInput1" placeholder='To' />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Colors</h5>
                                    <div className=''>
                                       <Color/>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" value="" id='color-1' className='form-check-input' />
                                            <label htmlFor="color-1" className='form-check-label'>S (2)</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" value="" id='color-2' className='form-check-input' />
                                            <label htmlFor="color-2" className='form-check-label'>M (2)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Product Tags
                                </h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge text-secondary bg-light py-2 px-3  rounded-3">Headphone</span>
                                        <span className="badge text-secondary bg-light py-2 px-3  rounded-3">Laptop</span>
                                        <span className="badge text-secondary bg-light py-2 px-3  rounded-3">Mobile</span>
                                        <span className="badge text-secondary bg-light py-2 px-3  rounded-3">Wire</span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Rendom Product
                                </h3>
                                <div>
                                    <div className="random-products d-flex mb-3">
                                        <div className="w-50"><img src={watch} alt="watch" className='img-fluid' /></div>
                                        <div className="w-50">
                                            <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                value={"3"}
                                                edit={false}
                                                size={24}
                                                activeColor={"#ffd700"}
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex">
                                        <div className="w-50"><img src={watch} alt="watch" className='img-fluid' /></div>
                                        <div className="w-50">
                                            <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                value={"3"}
                                                edit={false}
                                                size={24}
                                                activeColor={"#ffd700"}
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 d-block" style={{width:"100px"}}>Sort By:</p>
                                        <select name="" className='form-control form-select' id="">
                                            <option value="manual">Featured</option>
                                            <option value="best-selling" selected="selected">Best selling</option>
                                            <option value="title-ascending">Alphabetically, A-Z</option>
                                            <option value="title-descending">Alphabetically, Z-A</option>
                                            <option value="price-ascending">Price, low to high</option>
                                            <option value="price-descending">Price, high to low</option>
                                            <option value="created-ascending">Date, old to new</option>
                                            <option value="created-descending">Date, new to old</option>
                                        </select>
                                    </div>
                                    <div className='gap-10 d-flex align-items-center '>
                                        <p className="totalprodcuts mb-0">21 Products</p>
                                        <div className="d-flex align-items-center gap-10 grid">
                                            <img src={gr4} onClick={()=>{setGrid(3)}} className='d-block img-fluid' alt="grid" />
                                            <img src={gr3} onClick={()=>{setGrid(4)}} className='d-block img-fluid' alt="grid" />
                                            <img src={gr2} onClick={()=>{setGrid(6)}} className='d-block img-fluid' alt="grid" />
                                            <img src={gr1} onClick={()=>{setGrid(12)}} className='d-block img-fluid' alt="grid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="products-list row pb-5">
                                    <ProductCard grid={grid} productimg={watch} productimg_01={watch_01} />
                                    <ProductCard grid={grid} productimg={watch} productimg_01={watch_01} />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStore
