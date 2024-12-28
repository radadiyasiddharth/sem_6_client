import React from 'react'
import newsletter from "../assets/images/newsletter.png"
import { Link } from 'react-router-dom'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className=" input-group">
                <input type="text" className='form-control py-2' placeholder='Your Email Address' aria-label='Your Email Address' aria-describedby='' />
                <span className='input-group-text p-3'>Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className='col-4'>
              <h4 className='text-white mb-0'>Contact Us</h4>
              <div className='footer-links d-flex flex-column'>
              <address className='text-white fs-6'>
                  Hno : 277 Near vill chopal,<br/> sonipat, Haryana <br/>
                  PinCode : 131103
                </address>
                <a className='text-white  d-block mb-0 mt-3' href="tel:+91 6783459870">+91 6783459870</a>
                <a className='text-white  d-block mb-0 mt-2' href="mailto:Siddh123@gmail.com">Siddh123@gmail.com</a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className='text-white' href="social icon"><BsLinkedin className='fs-4'/></a>
                  <a className='text-white' href="social icon"><BsGithub className='fs-4'/></a>
                  <a className='text-white' href="social icon"><BsYoutube className='fs-4'/></a>
                  <a className='text-white' href="social icon"><BsInstagram className='fs-4'/></a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-0'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms Of Service</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-0'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Search</Link>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
                <Link className='text-white py-2 mb-1'>Size Chart</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-0'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Accessories</Link>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mb-0 text-white">
              <p className="text-center">&copy; {new Date().getFullYear()}; Powered by Developr's Corner</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
