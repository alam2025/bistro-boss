import React, { useContext, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import bgImg from '../../assets/others/authentication.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet';
const Register = () => {
      const [error,setError]= useState('')
      const navigate= useNavigate()
      const {signUpWithEmail,setProfile,logOut}=useContext(AuthContext);


      const handleFrom = (e) => {
            e.preventDefault()

            const form = e.target;
            const name= form.name.value;
            const photoUrl= form.photourl.value;
            const email = form.email.value;
            const password = form.password.value;

            const user = {name, email, password }
          
            signUpWithEmail(email,password)
            .then(result=>{
                  const user= result.user;
                  
                  setProfile(name,photoUrl)
                  .then(()=>{
                        logOut()
                        .then(()=>{
                              form.reset()
                        })
                        .catch(error=>setError(error.message))
                  }).catch(error=>setError(error.message))
                  navigate('/login')
                  console.log(user);

            }).catch(error=>setError(error.message))
      }
      return (
            <div style={{ backgroundImage: `url(${bgImg})` }} className=" min-h-screen bg-base-200">
                  <Helmet><title>Bistro Boss | login</title></Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse md:mx-[10%] border-2 mt-12 px-16 py-10 rounded-md shadow-md mb-10">
                  <div className="text-center md:w-1/2 lg:text-left">
                        <img src={loginImg} alt="" />
                  </div>
                  <div className="card  md:w-1/2    ">
                        <h1 className=' text-center text-2xl font-bold'>Login</h1>
                       {error&&<p className=' text-red-500'>{error}</p>}
                        <form onSubmit={handleFrom} className="card-body">
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Name</span>
                                    </label>
                                    <input required type="text" name='name' placeholder="name" className="input input-bordered" />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">PhotoUrl</span>
                                    </label>
                                    <input required type="text" name='photourl' placeholder="Enter photoUrl" className="input input-bordered" />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Email</span>
                                    </label>
                                    <input required type="email" name='email' placeholder="email" className="input input-bordered" />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Password</span>
                                    </label>
                                    <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                                    
                              </div>
                              
                              <div className="form-control mt-6">

                                    <input   className="btn btn-primary" type="submit" value="Register" />
                              </div>
                        </form>
                        <div className=' flex flex-col gap-4 justify-center items-center'>
                              <Link to='/login' className=' text-orange-700'>Already Registered? Go to login.</Link>
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

export default Register;