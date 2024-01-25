import React from 'react'
import "./Loginpage.css"

const Loginpage = () => {
  return (
    <>
    
   <div className="logincontainer">
    <div className="logincontainer-left">
        <div className="logininput">
            <div className="logininput-title">
                <div className="logininput-title--main">Welcome Back</div>
                <div className="logininput-title--sub">Please Login to your account</div>
                </div>
                <div>
                    <div className="logininput-mobile">
                        <label for="mobile" className="logininput-mobile--label">Mobile Number *</label>
                        <input className="logininput-mobile--input " id="mobile" type="text" placeholder="Enter your mobile number" name="phoneNumber"/>
                            </div>
                            <div className="logininput-password">
                                <label for="password" className="logininput-password--label">Password *</label>
                                <input className="logininput-password--input " id="password" type="password" name="password" placeholder="Enter your password"/>
                                <div className="logininput-password--eye undefined">
                                    <i className="fa-light fa-eye-slash"></i>
                                    </div>
                                    </div>
                                    <div className="logininput-forgot">
                                        <input type="checkbox" className="logininput-forgot--check"/>
                                        <div className="logininput-forgot--right">
                                            <div>Remember Me</div>
                                            <div className="forgotpassword">Forgot Password</div>
                                            </div>
                                            </div>
                                            <div className="logininput-submit">
                                                <button className="logininput-submit--button">Login</button>
                                                <div className="logininput-sumbit--bottom">
                                                    <span className="logininput-submit--dont">Don't have an account ?</span>
                                                    <span className="logininput-submit--register">Register for free</span>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    <div className="logincontainer-right--container">
                                                        <div className="logincontainer-right">
                                                            
                                                                </div>
                                                                </div>
                                                                </div>

    </>
  )
}

export default Loginpage