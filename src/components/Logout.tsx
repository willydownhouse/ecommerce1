import React from "react";
import { GoogleLogout } from "react-google-login";
import { LOGOUT, REMOVE_NOTIFICATION, SET_NOTIFICATION } from "../state/action";
import { useStateValue } from "../state/state";

function Logout() {
  const { dispatch } = useStateValue();

  const onSuccess = () => {
    dispatch({
      type: LOGOUT,
      payload: null,
    });
    dispatch({
      type: SET_NOTIFICATION,
      payload: {
        message: "You logged out!",
        color: "dark",
      },
    });
    setTimeout(
      () => dispatch({ type: REMOVE_NOTIFICATION, payload: null }),
      3000
    );
  };
  return (
    <div>
      <GoogleLogout
        clientId={process.env.REACT_APP_APP_OAUTH_CLIENT_ID as string}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
