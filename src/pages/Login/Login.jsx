import loginImg from '../../assets/others/authentication2.png'
import bgImg from '../../assets/others/authentication.png'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet';

const Login = () => {
      const [error,setError]= useState('')
      const navigate= useNavigate()
      const [disabled, setDisabled] = useState(true)
      const captchaRef = useRef(null)
      const location = useLocation()

      const {logIn}= useContext(AuthContext);

      const from =location.state?.from?.pathname ||'/';
  ;

      const handleFrom = (e) => {
            e.preventDefault()

            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;

            const user = { email, password }
            

            logIn(email,password)
            .then(result=>{
                  
                  navigate(from, { replace: true });
            })
            .catch(error=>setError(error.message))
      }

      const handleValidateCaptcha = (e) => {
            e.preventDefault()
            const user_captcha_value = captchaRef.current.value;
            if (validateCaptcha(user_captcha_value)) {
                  setDisabled(false)
            } else {
                  setDisabled(true)
            }
      }

      useEffect(() => {
            loadCaptchaEnginge(6);
      }, [])
      return (
            <div style={{ backgroundImage: `url(${bgImg})` }} className=" min-h-screen bg-base-200">
                  <Helmet><title>Bistro Boss | Regesiter</title></Helmet>
                  <div className="hero-content  flex-col lg:flex-row md:mx-[10%] border-2 mt-12 px-16 py-10 rounded-md shadow-md mb-10">
                        <div className="text-center md:w-1/2 lg:text-left">
                              <img src={loginImg} alt="" />
                        </div>
                        <div className="card  md:w-1/2    ">
                              <h1 className=' text-center text-2xl font-bold'>Login</h1>
                              <form onSubmit={handleFrom} className="card-body">
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Email</span>
                                          </label>
                                          <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Password</span>
                                          </label>
                                          <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                          
                                    </div>
                                    {/* recapcha */}
                                    <div className="form-control">
                                          <label className="label">
                                                <LoadCanvasTemplate />
                                          </label>

                                          <input ref={captchaRef} type="text" name='captcha' placeholder="Type captcha..." className="input input-bordered" />

                                    </div>
                                    <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs">Validate</button>
                                    <div className="form-control mt-6">

                                          <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                                    </div>
                                    <label className="label">
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                          </label>
                              </form>
                              <div className=' flex flex-col gap-4 justify-center items-center'>
                                    <Link to='/register' className=' text-orange-700'>New here? Create a New Account.</Link>
                                    <p>Or , Sign in WIth</p>
                                    <div className=' flex gap-4'>
                                          <button className="btn btn-circle btn-outline">
                                                <FaFacebook size={40}/>
                                          </button>
                                          <button className="btn btn-circle btn-outline">
                                                <FaGoogle size={40}/>
                                          </button>
                                          <button className="btn btn-circle btn-outline">
                                                <FaGithub size={40}/>
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;