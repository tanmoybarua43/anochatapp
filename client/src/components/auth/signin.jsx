import React,{useState} from 'react'
import '../../vendor/css/auth.css'
import image from '.././image'
import axios from 'axios'

const Signin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const SignInUser = async(e) => {
        e.preventDefault();
        console.log(email, password);
        try{
            const response = await axios.post('http://localhost:8080/login',JSON.
            stringify({email,password}),
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
            );

            console.log(response.data)

        } catch(error){
            if(error){
                console.log(error);
            }
        }
    }


  return (
        // Sing in  Form 
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={image.signin} alt="singup"/></figure>
                        <a href="/signup" className="signup-image-link">Create an account</a>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign In</h2>
                        <form className="register-form" id="login-form" onSubmit={SignInUser}>
                            <div className="form-group">
                                <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="email" id="your_email" placeholder="Your Email" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="your_pass" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} value={password}/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </form>
                        {/* <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="/#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="/#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="/#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Signin;