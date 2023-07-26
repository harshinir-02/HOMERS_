import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/Homers3.png';

import { client } from '../client';


const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    const { name, googleId, imageUrl , email} = response.profileObj;
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
      email: email,
    };
    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
  };
  return (
    <div className=" justify-start items-center flex-col h-screen ">
      <div className='grid grid-cols-2 gap-3 h-screen'>
        <div className=" relative w-full h-full">
          <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
          />  
        </div>
        <div className="relative w-full h-full justify-center mt-24 items-center top-0 right-0 left-0 bottom-0">
            <div className="mt-24  ml-32 mr-10 mb-0 p-5">
              <img src={logo} width="360px" />
              
            </div>
            <div className="m-5 mt-0 text-4xl font-body text-black text-center subpixel-antialiased">
              <h1>Welcome to Homers, where we connect you to the creators of the craft.</h1>
            </div>

            <div className="ml-64">
              <GoogleLogin
                clientId= {'704124284449-6ljqig1l69qftcaj5ano6sug9cnsq9ls.apps.googleusercontent.com' || '720071675864-o5p1val8o5bkdha667i0g021ekv09eqt.apps.googleusercontent.com'}
                render={(renderProps) => (
                  <button
                    type="button"
                    className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <FcGoogle className="mr-4 " /> Sign in with google
                  </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Login;
