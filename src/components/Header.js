import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import compare from "../assets/images/compare.svg"
import wishlist from "../assets/images/wishlist.svg"
import user from "../assets/images/user.svg"
import cart from "../assets/images/cart.svg"
import menu from "../assets/images/menu.svg"

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className=' text-white mb-0'>Free Shipping Over $100 & Free Return</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>Hotline: <a className='text-white' href="tel:+91 6783459870">+91 6783459870</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2><Link className='text-white'>Dev Corner</Link></h2>
            </div>
            <div className="col-5">
              <div className=" input-group">
                <input type="text" className='form-control py-2' placeholder='Search Product Here...' aria-label='Search Product Here...' aria-describedby='' />
                <span className='input-group-text p-3'><BsSearch className='fs-6' /></span>
              </div>
            </div>
            <div className="col-5">
              <header className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to={"/compare-product"} className='d-flex align-items-center gap-10 text-white'>
                    <img src={compare} alt="compare" />
                    <p className='mb-0'>Compare <br /> Product</p>
                  </Link>
                </div>
                <div>
                  <Link to={"/wishlist"} className='d-flex align-items-center gap-10 text-white'>
                    <img src={wishlist} alt="wishlist" />
                    <p className='mb-0'>Favourite <br />Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to={"/login"} className='d-flex align-items-center gap-10 text-white'>
                    <img src={user} alt="user" />
                    <p className='mb-0'>Log in <br />My Account</p>
                  </Link>
                </div>
                <div>
                  <Link to={"/cart"} className='d-flex align-items-center gap-10 text-white'>
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>
              </header>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30   ">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-felx align-items-center gap-15"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} className='d-inline-block me-5' alt="menu" /> <span>Shop Categories</span>
                    </button>
                    <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                      <Link className="dropdown-item text-white" to="">
                        Action
                      </Link>
                      <Link className="dropdown-item text-white" to="">
                        Another action
                      </Link>
                      <Link className="dropdown-item text-white" to="">
                        Something else here
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className={'text-white'} to={"/"}>Home</NavLink>
                    <NavLink className={'text-white'} to={"/product"}>Our Store</NavLink>
                    <NavLink className={'text-white'} to={"/blogs"}>Blogs</NavLink>
                    <NavLink className={'text-white'} to={"/contact"}>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
