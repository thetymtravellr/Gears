import React from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, emailUser, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    const url = "https://inventory-management-site.herokuapp.com/login";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: user.email
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('accessToken', data.token)
        toast.success('success',{id: 'login'})
        navigate(from,{replace: true})
      });
  }

  if(loading){
    return (<div className="h-screen w-full grid place-content-center">
      <Loading>Logging In</Loading>
    </div>)
  }

  return (
    <>
      <Header></Header>
      <div className="min-h-[75vh] flex items-center">
        
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md w-full mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Email address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              { ((error?.code === 'auth/user-not-found') && <p>invalid user</p>)}
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                
                type="password"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                id="exampleInputPassword1"
                placeholder="Password"
              />
              {(error?.code === 'auth/wrong-password') && <p className="text-red-500">wrong password</p>}

            </div>
            <button
              type="submit"
              className="
            w-full
      px-6
      py-2.5
      bg-indigo-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-indigo-700 hover:shadow-lg
      focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-indigo-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Didn't have an account?{" "}
            <span>
              <Link
                className="text-red-500 font-medium hover:underline"
                to="/register"
              >
                Register
              </Link>
            </span>
          </p>
          <div className="text-center mt-4">
            <p>Or</p>
            <p>Continue With</p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
