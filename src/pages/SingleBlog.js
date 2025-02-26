import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog1 from "../assets/images/blog-1.jpg"
import { Link } from 'react-router-dom'

const SingleBlog = () => {
    return (
        <>
            <Meta title="Dynamic blog name" />
            <BreadCrumb title="Dynamic blog name"></BreadCrumb>
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to={"/blogs"} className='d-flex gap-10 align-items-center '><HiOutlineArrowLeft className='fs-4'/>Go back to blog</Link>
                                <h3 className='title'>A beautiful sunday morning renaissance
                                </h3>
                                <img src={blog1} className='my-4 img-fluid w-100' alt="blog" />
                                <p>You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money.Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog
