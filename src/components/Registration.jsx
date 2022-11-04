import { async } from "@firebase/util";
import React from "react";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../assets/images/login.jpg";
import { UserAuth } from "../context/AuthContext";
export default function Registration({ visible, onClose }) {

  const handleOnClose = (e) => {
    if (e.target.id === "popUp") onClose();
  };

  if (!visible) return null;


const {googleSignIn} = UserAuth();

  const handleGoogleSignIn = async () =>{
    try{
      await googleSignIn();
    }
    catch(error){
      console.log(error);
    }
};

 

  return (
    <div
      onClick={handleOnClose}
      id="popUp"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded-xl">
        <div className="flex flex-1 mx-32 ">
          <div className="flex items-center justify-center mt-2">
            <img src={login} className="w-[500px]" />
          </div>
        </div>

        <div className="flex-1 mt-10 flex item-center justify-center h-full z-10">
          <div className="md:text-left text-center mt-2">
            <h3 className="w-[184px] left-[475px] text-[24px] text-black items-center tracking-wider">
              Create <span className="text-[#53C79E]">Account</span>
            </h3>

            <span className="flex mt-8 justify-center text-gray-600 gap-[53px]">
              <button> 
                <span className="border-2 w-[250px] text-center justify-center flex gap-2 rounded-lg">
                  <BsGoogle className="w-[27.93px] h-[29.06px] gap-[15.1px] justify-center" />
                  <span className="text-[18px] text-center">
                    Sign up with Google
                  </span>
                </span>
              </button>

              <button>
                <span className="border-2 w-[250px] text-center justify-center flex gap-2 rounded-lg">
                  <FaFacebook className="w-[27.93px] h-[29.06px] gap-[15.1px]" />
                  <span className="text-[18px] text-center">
                    Sign up with Facebook
                  </span>
                </span>
              </button>
            </span>

            <div className="flex justify-center items-center mt-2">
              <h3 className="text-gray-600">-OR-</h3>
            </div>

            <div className="flex justify-center items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="First Name"
                className="text-xl border-2 rounded-xl outline-0 text-gray-600"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="text-xl border-2 rounded-xl outline-0 text-gray-600"
              />
            </div>
            <div className="flex justify-center items-center gap-2 mt-8">
              <input
                type="text"
                placeholder="Email Address"
                className="text-xl border-2 rounded-xl outline-0 text-gray-600"
              />
              <input
                type="text"
                placeholder="Password"
                className="text-xl border-2 rounded-xl outline-0 text-gray-600"
              />
            </div>

            <div className="flex items-center justify-center ">
              <button className="border-2 rounded-xl mt-4 bg-[#53C79E] w-60 text-white text-center items-center text-xl hover:bg-white hover:text-gray-600">
                Create Account
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <p className="text-gray-600">
                Already have an Account?{" "}
                <button>
                  <Link to="/login"><span className="text-[#53C79E]">Log in</span></Link>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
