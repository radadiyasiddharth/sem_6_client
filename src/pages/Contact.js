import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";


const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us"></BreadCrumb>
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7438.714975353835!2d72.86881349864768!3d21.21766817163136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1734497734342!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowfullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between ">
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form className='d-flex flex-column gap-15' action="">
                    <div>
                      <input type="text" className='form-control' name="" id="" placeholder='Name'/>
                    </div>
                    <div>
                      <input type="email" className='form-control' name="" id="" placeholder='Email'/>
                    </div>
                    <div>
                      <input type="tel" className='form-control' name="" id="" placeholder='Mobile Number'/>
                    </div>
                    <div>
                     <textarea name="" rows={4} className='form-control' cols={30} id="" placeholder='comments'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div><h3 className='contact-title mb-4'>Get in touch with us</h3>
                  <div>
                    <ul className='ps-0 '>
                      <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineHome className='fs-5'/><address className='mb-0'>33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</address></li>
                      <li className='mb-3 d-flex gap-15 align-items-center'><BiPhoneCall className='fs-5'/><a href="tel:+91 7-723-4608">(+91)7-723-4608</a></li>
                      <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineMail className='fs-5'/><a href="mailto:siddh123@gmail.com">demo@company.com</a></li>
                      <li className='mb-3 d-flex gap-15 align-items-center'><BiInfoCircle className='fs-5'/><p className='mb-0'>Monday – Friday 10 AM – 8 PM</p></li>
                    </ul>
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

export default Contact
