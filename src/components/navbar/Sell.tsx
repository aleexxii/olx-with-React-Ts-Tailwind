import { Plus } from "lucide-react";
import useAuth from "../../hooks/useAuth";

import { useEffect, useReducer } from "react";
import { initialState, navbarReducer } from "../../reducers/NavbarReducer";
import { LoginModal } from "./Login";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const { user } = useAuth();
  const [state, dispatch] = useReducer( navbarReducer , initialState )
  const style = "flex bg-white font-poppins font-semibold items-center justify-center border-8 w-[92.81px] h-[44.88px] border-t-teal-400 border-l-yellow-400 border-b-green-300 border-r-blue-400 rounded-full"
  const navigate = useNavigate()
  const handleSellButton = () => {

    if(!user){
        dispatch({type : 'OPEN_LOGIN_MODAL'})
      return
    }else{
      navigate('/post')
    }
  }

  useEffect(() => {
    if(user && state.showLoginModal){
      dispatch({type : 'CLOSE_LOGIN_MODAL'})
    }
  },[user,state.showLoginModal])

  return (
    <div>
      <div className={style} onClick={handleSellButton}>
        <Plus />
        SELL
      </div>
      {state.showLoginModal && (
        <LoginModal isVisible={state.showLoginModal} 
        onClose={() => dispatch({ type: 'CLOSE_LOGIN_MODAL' })}/>
      )}
    </div>
  );
};

export default Sell;
