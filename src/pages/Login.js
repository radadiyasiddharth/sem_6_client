import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import { loginUser } from '../features/user/userSlice'

let loginSchema = yup.object({
    email: yup.string().email("Email Should be Valid").required("Emial Address is Required"),
    password: yup.string().required("Password is Rquired")
});
const Login = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            dispatch(loginUser(values))
        },
    });
    return (
        <>
            <Meta title="Login" />
            <BreadCrumb title="Login"></BreadCrumb>
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Login</h3>
                                <form action="" className='d-flex flex-column gap-15' onSubmit={formik.handleSubmit}>
                                    <div>
                                        <input type="email" name='email' placeholder='Email' onBlur={formik.handleBlur("email")} onChange={ formik.handleChange("email")} className="form-control" value={formik.values.email} />
                                        <div className='error'>
                                            {
                                                formik.touched.email && formik.errors.email
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <input type="password" name='password' placeholder='Password' className="form-control mt-3" onBlur={formik.handleBlur("password")} onChange={formik.handleChange("password")} value={formik.values.password} />
                                        <div className='error'>
                                            {
                                                formik.touched.password && formik.errors.password
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <Link to={"/forgot-password"}>Forgot Password?</Link>
                                        <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                                            <button className='button border-0'>Login</button>
                                            <Link to={"/signup"} className='button signup'>SignUp</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
