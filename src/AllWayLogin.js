// import React from "react";
import React, { useCallback, useState } from "react";
// import { FacebookLoginButton } from "react-social-login-buttons";
import {
  LoginSocialGoogle,
  LoginSocialAmazon,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialPinterest,
  LoginSocialTwitter,
  LoginSocialApple,
  IResolveParams,
} from "reactjs-social-login";

import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";

const REDIRECT_URI =
  "https://plenty-planets-beam-42-118-51-2.loca.lt/account/login";

const AllWayLogin = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState(null);

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  const onLogout = useCallback(() => {}, []);
  //--------------- style-------
  const stObj = {
    display: "block",
    border: "0px",
    borderRadius: "3px",
    // box-shadow: "rgb(0 0 0 / 50%) 0px 1px 2px"
    color: "black",
    cursor: "pointer",
    fontSize: "19px",
    margin: "5px",
    overflow: "hidden",
    // padding: "0px" "10px";
    userSelect: "none",
    height: "60px",
    background: "white",
    width: "267px",
    position: "relative",
    left: "209px",
  };
  return (
    <>
      {console.log("first", provider)}
      {console.log("second", profile)}
      {profile !== null ? (
        <button onClick={onLogoutSuccess}>LOGOUT</button>
      ) : null}

      <LoginSocialGoogle
        client_id={
          "430058054339-hdce1sn7dt3h4dqug4i667hevme37h25.apps.googleusercontent.com" ||
          ""
        }
        onLoginStart={onLoginStart}
        redirect_uri={REDIRECT_URI}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }: IResolveParams) => {
          setProvider(provider);
          setProfile(data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton style={stObj} />
      </LoginSocialGoogle>
    </>
  );
};

export default AllWayLogin;
