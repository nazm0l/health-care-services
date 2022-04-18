import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import google from '../../../images/google.png'

const SocialLogin = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (userGoogle) {
        navigate("/");
      }
    
      let errorMessage;
      if (errorGoogle) {
        errorMessage = (
          <p className="text-danger">
            {errorGoogle?.message}
          </p>
        );
      }
    
      if (loadingGoogle) {
        return <Loading></Loading>;
      }

  return (
    <div>
      <div className="d-flex align-items-center">
          {errorMessage}
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
        <p className="mt-2 px-2">OR</p>
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
      </div>
      <div className="text-center">
        <button onClick={() => signInWithGoogle()} className="btn btn-dark">
         <img style={{width: "40px"}} src={google} alt="" /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
