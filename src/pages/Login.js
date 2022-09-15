import React from 'react'

function Login() {

  return (
    <div className="container">
        <form className='login'>
        <h2>Login</h2>
        <div className="social-logins">
            <div className="facebook social-login">
                <i class="fa-brands fa-square-facebook"></i>
                <span>Login with Facebook</span>
            </div>
            <div className="apple social-login">
                <i class="fa-brands fa-apple"></i>
                <span>Login with Apple</span>
            </div>
            <div className="google social-login">
                <i class="fa-brands fa-google"></i>
                <span>Login with Google</span>
            </div>
        </div>
        <div className="or">
            <hr />
            <span>OR</span>
            <hr />
        </div>
        <div className="user-login">
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='Email here' required />
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='Password here' required />
            </div>
        </div>
        <button className='login-btn' type='submit' >Login</button>
    </form>
    </div>
  )
}

export default Login