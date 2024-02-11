import React from 'react';
import './authstyle.css';
import closeIcon from '../assets/CloseIcon.svg'

const AuthComponent = ({handleAuthDisplay}) => {
    return (
        <div className='auth-backdrop'>
            <div className="section pb-5 pt-5 pt-sm-2 text-center form-container">
            <img src={closeIcon} onClick={handleAuthDisplay} className='close-auth' />
                <h6 className="mb-0 pb-3">
                    <span style={{ color: 'white' }} >Log In </span>
                    <span style={{ color: 'white' }} >Sign Up</span>
                </h6>
                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                        <div className="card-front">
                            <div className="center-wrap">
                                <div className="section text-center">
                                    <h4 className="mb-4 pb-3" style={{ color: 'white' }}>Log In</h4>
                                    <div className="form-group">
                                        <input type="email" className="form-style" placeholder="Email" />
                                        <i className="input-icon uil uil-at"></i>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="password" className="form-style" placeholder="Password" />
                                        <i className="input-icon uil uil-lock-alt"></i>
                                    </div>
                                    <a href="https://www.web-leb.com/code" className="btn mt-4">
                                        Login
                                    </a>
                                    <p className="mb-0 mt-4 text-center">
                                        <a href="https://www.web-leb.com/code" className="link">
                                            Forgot your password?
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-back">
                            <div className="center-wrap">
                                <div className="section text-center">
                                    <h4 className="mb-3 pb-3" style={{ color: 'white' }}>Sign Up</h4>
                                    <div className="form-group">
                                        <input type="text" className="form-style" placeholder="Full Name" />
                                        <i className="input-icon uil uil-user"></i>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="tel" className="form-style" placeholder="Phone Number" />
                                        <i className="input-icon uil uil-phone"></i>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="email" className="form-style" placeholder="Email" />
                                        <i className="input-icon uil uil-at"></i>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="password" className="form-style" placeholder="Password" />
                                        <i className="input-icon uil uil-lock-alt"></i>
                                    </div>
                                    <a href="https://www.web-leb.com/code" className="btn mt-4">
                                        Register
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthComponent;
