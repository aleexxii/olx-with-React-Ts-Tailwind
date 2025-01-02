export const initialState = {
  isLoggedIn: false,
  isLanguageDropDownOpen: false,
  showLoginModal: false,
  isUserInfoDropDwonOpen: false,
};

type NavbarAction =
  | { type: "OPEN_LOGIN_MODAL" }
  | { type: "CLOSE_LOGIN_MODAL" };

export const navbarReducer = (state = initialState, action: NavbarAction) => {
  switch (action.type) {
    case "OPEN_LOGIN_MODAL":
      return {
        ...state,
        showLoginModal: true,
      };
    case "CLOSE_LOGIN_MODAL":
      return {
        ...state,
        showLoginModal: false,
      };

    default:
      throw new Error(`{unhandled action type : ${action}}`);
  }
};
