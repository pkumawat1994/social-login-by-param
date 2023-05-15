import React from "react";
import GoogleLogin from "react-google-login";
const responseGoogle = (response) => {
  console.log(response);
};
const MyGoogleLogin = () => {
  return (
    <>
      <h1>Login With Google</h1>
      <GoogleLogin
        clientId="430058054339-hdce1sn7dt3h4dqug4i667hevme37h25.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        // cookiePolicy={"single_host_origin"}
      />
    </>
  );
};

export default MyGoogleLogin;
