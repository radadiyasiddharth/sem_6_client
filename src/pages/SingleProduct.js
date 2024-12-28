import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import watch from "../assets/images/watch.jpg"
import watch_01 from "../assets/images/watch_01.avif"
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';


const SingleProduct = () => {
    const props = {
        width: 400,       
        height: 500,     
        zoomWidth: 500,   
        img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg",
    };
    
    const [orderedProduct, setorderedProduct] = useState(false)
    return (
        <>
            <Meta title="product name" />
            <BreadCrumb title="product name"></BreadCrumb>
            <div className="single-product-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div><ReactImageZoom {...props}/></div>
                            </div>
                        <div className="other-product-images d-flex flex-wrap gap-15">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                                <h4>Description</h4>
                            <div className="bg-white p-3">
                                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae facere perferendis minus quae, cum corporis!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper  home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                        <h3>Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                count={5}
                                                value={"3"}
                                                edit={false}
                                                size={24}
                                                activeColor={"#ffd700"}
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && (
                                            <div>
                                                <a className='text-dark text-decoration-underline' href="">Write a Review</a>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="review-form py-4">
                                    <h4>Write Review</h4>
                                    <form className='d-flex flex-column gap-15' action="">
                                        <div>
                                            <ReactStars
                                                count={5}
                                                value={"3"}
                                                edit={true}
                                                size={24}
                                                activeColor={"#ffd700"}
                                            />
                                        </div>
                                        <div>
                                            <textarea name="" rows={4} className='form-control' cols={30} id="" placeholder='comments'></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                       <div className="d-flex align-items-center gap-10">
                                        <h6 className='mb-0'>Navdeep</h6>
                                       <ReactStars
                                            count={5}
                                            value={"3"}
                                            edit={false}
                                            size={24}
                                            activeColor={"#ffd700"}
                                        />
                                       </div>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente aliquam omnis saepe maiores perferendis hic accusamus expedita commodi! Aspernatur iusto dolor optio accusamus praesentium cum. Corporis tenetur recusandae sint.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="populae-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        {
                            [{ productimg: watch, productimg_01: watch_01 }].map((val, index) => {
                                return (
                                    <ProductCard index={index} productimg={val.productimg} productimg_01={val.productimg_01}></ProductCard>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct
