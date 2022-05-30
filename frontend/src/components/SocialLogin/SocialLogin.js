import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import github from '../../../src/assets/image/github.png';
import google from '../../../src/assets/image/search.png';
import auth from '../../../src/firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    if(googleError) {
        if(googleError?.code === 'auth/account-exists-with-different-credential'){
            toast.error('Email Already Exist With Another Account',{id: 'googleError'})
        } else {
            toast.error('something went wrong',{id: 'googleError'})
        }
    }

    if(githubError) {
        if( githubError?.code === 'auth/account-exists-with-different-credential'){
            toast.error('Email Already Exist With Another Account',{id: 'githubError'})
        } else {
            toast.error('something went wrong',{id: 'githubError'})
        }
    }
    

    return (
        <div className='flex justify-center gap-6 mt-4'>
        <button onClick={() => signInWithGoogle()} title='google'><img className='w-10' src={google} alt="" /></button>
        <button onClick={() => signInWithGithub()} title='github'><img className='w-10' src={github} alt="" /></button>
    </div>
    );
};

export default SocialLogin;