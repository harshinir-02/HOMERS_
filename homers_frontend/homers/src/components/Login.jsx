import React, { useState } from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/Homers3.png';
import Spinner from './Spinner';

import { client } from '../client';


const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const responseGoogle = (response) => {
    setLoading(true);
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
      setLoading(false);
      navigate('/', { replace: true });
    }).catch((err) => {
      setLoading(false);
      console.error(err);
    });
  };
  return (
    <div className="overflow-hidden justify-start items-center flex-col h-screen ">
      <div className="grid grid-cols-2 gap-3 h-screen">
        <div className=" relative w-full h-screen">
          <video
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-screen object-cover"
          />
        </div>
        <div className={`relative w-full h-screen justify-center ${!loading ? "mt-24"  : ""} items-center  `}>
          {loading ? (
            <div className='h-full w-full flex justify-center items-center'>
            <Spinner
              className="flex justify-center"
              message={`We are logging you into your feed!`}
            />
            </div>
          ) : (
            <>
              {" "}
              <div className="mt-24 flex justify-center">
                <img src={logo} width="360px" />
              </div>
              <div className="m-5 mt-0 max-[712px]:mt-6 text-2xl min-[712px]:text-4xl font-body text-black text-center subpixel-antialiased">
                <h1>
                  Welcome to Homers, where we connect you to the creators of the
                  craft.
                </h1>
              </div>
              <div className="flex justify-center  ">
                <GoogleLogin
                  clientId={
                    "704124284449-6ljqig1l69qftcaj5ano6sug9cnsq9ls.apps.googleusercontent.com" ||
                    "720071675864-o5p1val8o5bkdha667i0g021ekv09eqt.apps.googleusercontent.com"
                  }
                  render={(renderProps) => (
                    <button
                      type="button"
                      className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}>
                      <FcGoogle className="mr-4 " /> Sign in with google
                    </button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy="single_host_origin"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
