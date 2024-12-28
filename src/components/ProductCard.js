import React from 'react'
import ReactStars from 'react-rating-stars-component';
import view_icon from "../assets/images/view.svg"
import prodcompare_icon from "../assets/images/prodcompare.svg"
import add_cart_icon from "../assets/images/add-cart.svg"
import wish_icon from "../assets/images/wish.svg"
import { Link, useLocation } from 'react-router-dom';

const ProductCard = ({ productimg, productimg_01, grid }) => {
  const location = useLocation()
  return (
    <div className={`${location.pathname === "/store" ? `col-${grid}` : "col-3"}`}>
      <Link className={`position-relative product-card ${grid === 12 ? ` my-2 align-items-center d-flex gap-15` : ""}`}>
        <div className="wishlist-icon position-absolute">
          <Link><img src={wish_icon} alt="" /></Link>
        </div>
        <div className="product-image">
          <img src={productimg} className='img-fluid' alt="productimg" />
          <img src={productimg_01} className='img-fluid' alt="productimg_01" />
        </div>
        <div className="product-details">
          <h6>Havels</h6>
          <h5 className="product-title">Kids headphones  10 pack  multi colored  for student</h5>
          <ReactStars
            count={5}
            value={"3"}
            edit={false}
            size={24}
            activeColor={"#ffd700"}
          />
          <p className={`description ${grid === 12 ? `d-block` : "d-none"}`}>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute ">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src={prodcompare_icon} alt="prodcompare_icon" />
            </Link>
            <Link>
              <img src={view_icon} alt="view_icon" />
            </Link>
            <Link>
              <img src={add_cart_icon} alt="add_cart_icon" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
