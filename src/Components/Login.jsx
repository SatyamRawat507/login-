import React from 'react'
import image from '../image.jpg'

const Login = () => {
    return (
        <>
            <div className='container d-flex justify-content-center align-items-center min-vh-100'>
                <div className='row border radius-5 p-3 bg-white shadow box-area'>

                    <div className='col-md-6 rounded-4 d-flex justify-content center align-items center left-box'>
                        <div className='featured-image'>
                            <img src={image} alt={"not found"} className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-md-6 right-box'>
                        <div className='row align-items-center'>
                            <div className='header-text mb-4'>
                                <h1>Login</h1>
                                <p>Hello Again</p>
                                <p>We are happy to have you back</p>

                            </div>
                            <div className='input-group mb-3'>
                                <input type='text' className='form-control form-control-lg input-sm bg-light fs-6' placeholder='Enter your Number'></input>
                            </div>
                            <div className='input-group mb-3'>
                                <input type='text' className='form-control form-control-lg bg-light input-sm fs-6' placeholder='Enter your OTP'></input>
                            </div>
                            <div className='input-group mb-3'>
                                <button className='btn btn-lg btn-primary w-100 fs-6' >Login</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}
export default Login;  