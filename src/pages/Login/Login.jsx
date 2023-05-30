import loginImg from '../../assets/others/authentication2.png'
import bgImg from '../../assets/others/authentication.png'

const Login = () => {
      return (
            <div style={{backgroundImage:`url(${bgImg})`}} className=" min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row md:mx-[10%] border-2 mt-12 px-16 py-10 rounded-md shadow-md">
                        <div className="text-center md:w-1/2 lg:text-left">
                             <img src={loginImg} alt="" />
                        </div>
                        <div className="card  md:w-1/2    ">
                              <h1 className=' text-center text-2xl font-bold'>Login</h1>
                              <form className="card-body">
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Email</span>
                                          </label>
                                          <input type="text" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Password</span>
                                          </label>
                                          <input type="text" placeholder="password" className="input input-bordered" />
                                          <label className="label">
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                          </label>
                                    </div>
                                    <div className="form-control mt-6">
                                          
                                          <input className="btn btn-primary" type="submit" value="Login" />
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default Login;