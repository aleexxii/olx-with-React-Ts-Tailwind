import React, { useState } from "react";
import { Carousel } from "flowbite-react";
import { ChevronDown, ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const {user} = useAuth()
  const photoURL = user?.photoURL
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div>
      {user ? 
      <div className="w-[80px] h-[35px] flex">
        <div className="h-[35px] w-[35px] rounded-full">
      <img src={photoURL} alt="" className="h-[35px] w-[35px] rounded-full"/>
        </div>
        <div className="ps-1 flex items-center">
          <ChevronDown size={30}/>
        </div>
      </div>  : 
      <>
      <button
        className="underline hover:no-underline font-poppins font-medium"
        onClick={openModal}
      >
        Login
      </button>
      <LoginModal isVisible={isModalVisible} onClose={closeModal} />
      </>
      }
    </div>
  );
};

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

const LoginModal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  const {loginWithGoogle} = useAuth()
  if (!isVisible) return null;
  return (
    <>
      <div
        tabIndex={-1}
        className="h-[600px] w-[400px] overflow-y-hidden overflow-x-hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
        aria-hidden={!isVisible}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative rounded-lg shadow dark:bg-gray-700">
            <div className=" h-[220px] w-[360px] items-center">
              <LoginCarousal />
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={onClose}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <div className="flex border-2 border-black p-3 hover:border-4 rounded text-slate-700 font-bold">
                <Smartphone />
                <span className="ps-2">
                Continue with phone
                </span>
              </div>
              <div className="flex border-2 border-black p-3 hover:bg-slate-300 rounded text-slate-700 font-semibold" onClick={loginWithGoogle}>
                continue with google
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-sans">OR</h1>
              <h1 className="font-roboto font-semibold underline">
                Login with Email
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center mt-16">
              <span>
                <p className="text-xs font-sans">
                  All your personal details are safe with us.
                </p>
              </span>
              <div className="flex flex-col items-center justify-center text-xs mt-2 mb-3 font-sans">
                <span>
                  If you continue, you are accepting OLX Terms and Conditions
                  and
                </span>
                <span> Privacy Policy </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const LoginCarousal = () => {
  return (
    <Carousel
      pauseOnHover
      leftControl={<ChevronLeft color="grey" />}
      rightControl={<ChevronRight color="grey" />}
    >
      <div className="justify-items-center">
        <img
          src="/LoginModal/entry_point.png"
          alt="..."
          className="h-24 w-24"
        />
        <span className="ps-8 pe-8 flex items-center justify-center text-center font-medium text-slate-700 font-roboto">Help us become one of the safest places to buy and sell</span>
      </div>
      <div className="justify-items-center">
        <img
          src="/LoginModal/login_favorite.png"
          alt="..."
          className="h-24 w-24"
        />
        <p className="ps-8 pe-8 flex items-center justify-center text-center font-medium text-slate-700 font-roboto">Close deals from the comfort of your home.</p>
      </div>
      <div className="justify-items-center">
        <img src="/LoginModal/point_chat.png" alt="..." className="h-24 w-24" />
        <p className="ps-8 pe-8 flex items-center justify-center text-center font-medium text-slate-700 font-roboto">Keep all your favourites in one place.</p>
      </div>
    </Carousel>
  );
};

export default Login;
