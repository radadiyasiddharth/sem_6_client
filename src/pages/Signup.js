import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlice';

let signUpSchema = yup.object({
  firstname: yup.string().required("First Name is Reqired"),
  lastname: yup.string().required("Last Name is Reqired"),
  email: yup.string().email("Email Should be Valid").required("Emial Address is Required"),
  mobile: yup.string().required("Mobile No is Rquired"),
  password: yup.string().required("Password is Rquired")
});
const Signup = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: values => {
      dispatch(registerUser(values))
    },
  });
  return (
    <>
      <Meta title="Sign Up" />
      <BreadCrumb title="Sign Up"></BreadCrumb>
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className='text-center mb-3'>Sign Up</h3>
                <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text"
                      name='firstname'
                      placeholder='First Name'
                      className="form-control"
                      value={formik.values.firstname}
                      onChange={formik.handleChange("firstname")}
                      onBlur={formik.handleBlur("firstname")}
                    />
                  </div>
                  <div className='error'>
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>
                  <div>
                    <input type="text" name='lastname' placeholder='Last Name' className="form-control" value={formik.values.lastName} onChange={formik.handleChange("lastname")} onBlur={formik.handleBlur("lastname")} />
                  </div>
                  <div className='error'>
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                  <div>
                    <input type="email" name='email' placeholder='Email' className="form-control" value={formik.values.email} onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")} />
                  </div>
                  <div className='error'>
                    {formik.touched.email && formik.errors.email}
                  </div>
                  <div>
                    <input type="tel" name='mobile' placeholder='Mobile Number' className="form-control" value={formik.values.mobile} onChange={formik.handleChange("mobile")} onBlur={formik.handleBlur("mobile")} />
                  </div>
                  <div className='error'>
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                  <div>
                    <input type="password" name='password' placeholder='Password' className="form-control mt-1" value={formik.values.password} onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")} />
                  </div>
                  <div className='error'>
                    {formik.touched.password && formik.errors.password}
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button className='button border-0'>Sign Up</button>
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

export default Signup
