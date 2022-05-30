import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import auth from "../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, emailUser, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);

  const location = useLocation();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const displayName = data.name;
    const email = data.email;
    const password = data.password;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    await sendEmailVerification();
    
  };

  if(emailUser){
    toast.success("Verification Email Sent, Confirm Mail");
  }

  if(loading || updating || sending){
    return (<div className="h-screen w-full grid place-content-center">
      <Loading>Logging In</Loading>
    </div>)
  }

  if(error || updatingError){
    if(error.code === 'auth/email-already-in-use'){
      toast.error('email already in use',{id: register})
    } else {
      toast.error('something went wrong',{id: register})
    }
  }

  return (
    <>
      <Header></Header>
      <div className="min-h-[75vh] flex items-center">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md w-full mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-6">
              <label
                htmlFor="nameField"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
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
                id="nameField"
                aria-describedby="emailHelp"
                placeholder="Enter name"
              />
            </div>
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
              Register
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <span>
              <Link
                className="text-indigo-500 font-medium hover:underline"
                to="/login"
              >
                Login
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

export default Register;
