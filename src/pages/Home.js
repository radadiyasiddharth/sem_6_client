import React from 'react'
import main_banner from "../assets/images/main-banner-1.jpg"
import catbanner1 from "../assets/images/catbanner-01.jpg"
import catbanner2 from "../assets/images/catbanner-02.jpg"
import catbanner3 from "../assets/images/catbanner-03.jpg"
import catbanner4 from "../assets/images/catbanner-04.jpg"
import service1 from "../assets/images/service.png"
import service2 from "../assets/images/service-02.png"
import service3 from "../assets/images/service-03.png"
import service4 from "../assets/images/service-04.png"
import service5 from "../assets/images/service-05.png"
import camera from "../assets/images/camera.jpg"
import tv from "../assets/images/tv.jpg"
import brand1 from "../assets/images/brand-01.png"
import brand2 from "../assets/images/brand-02.png"
import brand3 from "../assets/images/brand-03.png"
import brand4 from "../assets/images/brand-04.png"
import brand5 from "../assets/images/brand-05.png"
import brand6 from "../assets/images/brand-06.png"
import brand7 from "../assets/images/brand-07.png"
import brand8 from "../assets/images/brand-08.png"
import headphone from "../assets/images/headphone.jpg"
import watch from "../assets/images/watch.jpg"
import watch_01 from "../assets/images/watch_01.avif"
import blog1 from "../assets/images/blog-1.jpg"
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee"
import BlogCard from "../components/BlogCard"
import ProductCard from "../components/ProductCard"
import SpecialProduct from "../components/SpecialProduct"
import famous_01 from "../assets/images/famous_01.webp"
import famous_02 from "../assets/images/famous_02.webp"
import famous_03 from "../assets/images/famous_03.webp"
import famous_04 from "../assets/images/famous_04.webp"

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner  position-relative">
                <img src={main_banner} className='img-fluid rounded-3' alt="main_banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between gap-10 align-items-center">
                <div className="small-banner  position-relative">
                  <img src={catbanner1} className='img-fluid rounded-3' alt="small_banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>From $1699.00 or <br />$64.62/mo</p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img src={catbanner3} className='img-fluid rounded-3' alt="small_banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $599.00 or <br />$49.91/mo for 12 mo. *</p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img src={catbanner2} className='img-fluid rounded-3' alt="small_banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>Shop the latest brand <br />style and color</p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img src={catbanner4} className='img-fluid rounded-3' alt="small_banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>Air Pods Max</h5>
                    <p>High-fidelitymplayback & <br />ultra low distartion</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="service d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center gap-15'>
                  <img src={service1} alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={service2} alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={service3} alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={service4} alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={service5} alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="tv" />
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Smart watch</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="watch" />
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headphone} alt="camera" />
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="tv" />
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Smart watch</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="watch" />
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headphone} alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
          </div>
          <div className="row">
            {
              [{ productimg: watch, productimg_01: watch_01 }, { productimg: watch, productimg_01: watch_01 }, { productimg: watch, productimg_01: watch_01 }, { productimg: watch, productimg_01: watch_01 }].map((val, index) => {
                return (
                  <ProductCard index={index} productimg={val.productimg} productimg_01={val.productimg_01}></ProductCard>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous_01} alt="famous_01" className='img-fluid'/>
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo. for 24 mo. *</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous_02} alt="famous_02" className='img-fluid'/>
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Studio Display</h5>
                  <h6 className='text-dark'>600 nits of brightness.</h6>
                  <p className='text-dark'>27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous_03} alt="famous_03" className='img-fluid'/>
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>smartphones</h5>
                  <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                  <p className='text-dark'>Now in Green. From $999.00 or $41.62/mo.
                  for 24 mo. Footnote*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous_04} alt="famous_04" className='img-fluid'/>
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>home speakers</h5>
                  <h6 className='text-dark'>Room-filling sound.</h6>
                  <p className='text-dark'>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Product</h3>
            </div>
          </div>
          <div className="row">
            {
              [{ productimg: watch, productimg_01: watch_01 }, { productimg: watch, productimg_01: watch_01 }, { productimg: watch, productimg_01: watch_01 },{ productimg: watch, productimg_01: watch_01 }].map((val, index) => {
                return (
                  <SpecialProduct index={index} productimg={val.productimg} productimg_01={val.productimg_01}></SpecialProduct>
                )
              })
            }
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
              [{ productimg: watch, productimg_01: watch_01 }, { productimg: watch, productimg_01: watch_01 }, { productimg: watch, productimg_01: watch_01 }, { productimg: watch, productimg_01: watch_01 }].map((val, index) => {
                return (
                  <ProductCard index={index} productimg={val.productimg} productimg_01={val.productimg_01}></ProductCard>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  {
                    [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8].map((val, index) => {
                      return (
                        <div key={index} className='w-25 mx-4'>
                          <img src={val} alt={val} />
                        </div>
                      )
                    })
                  }
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            {
              [{ blog_img: blog1 }, { blog_img: blog1 }, { blog_img: blog1 }, { blog_img: blog1 }].map((val, index) => {
                return (
                  <div className='col-3'>
                    <BlogCard index={index} image={val.blog_img}></BlogCard>
                    </div>
                )
              })
            }
          </div>

        </div>
      </section>
    </>
  )
}

export default Home
