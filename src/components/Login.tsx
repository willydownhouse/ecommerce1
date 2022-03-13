import React from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { IUser } from "../interfaces/user";
import { LOGIN, REMOVE_NOTIFICATION, SET_NOTIFICATION } from "../state/action";
import { useStateValue } from "../state/state";
import { refreshTokenSetup } from "../utils/refreshTokenSetup";

function Login() {
  const { dispatch } = useStateValue();
  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    // console.log(
    //   "[Login success] currentUser:",
    //   (res as GoogleLoginResponse).profileObj
    // );

    refreshTokenSetup(res as GoogleLoginResponse);

    dispatch({
      type: LOGIN,
      payload: (res as GoogleLoginResponse).profileObj as IUser,
    });
    dispatch({
      type: SET_NOTIFICATION,
      payload: {
        message: "You succesfully logged in!",
        color: "dark",
      },
    });
    setTimeout(
      () => dispatch({ type: REMOVE_NOTIFICATION, payload: null }),
      3000
    );
  };

  const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log("[Login failed] res: ", res);
    dispatch({
      type: SET_NOTIFICATION,
      payload: {
        message:
          "There was a problem while you tried to log in. Please try again later!",
        color: "danger",
      },
    });
    setTimeout(
      () => dispatch({ type: REMOVE_NOTIFICATION, payload: null }),
      3000
    );
  };
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_OAUTH_CLIENT_ID as string}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
