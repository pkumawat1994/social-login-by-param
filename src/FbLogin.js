import React from "react";

//------------------------------------------------

function statusChangeCallback(response) {
  // Called with the results from FB.getLoginStatus().
  //   console.log("statusChangeCallback");
  console.log(response); // The current login status of the person.
  if (response.status === "connected") {
    console.log("connectedddd");
    // Logged into your webpage and Facebook.
    testAPI();
  } else {
    // Not logged into your webpage or we are unable to tell.
    console.log("NOT-connectedddd");
    // console.log("Please log " + "into this webpage.");
  }
}

function checkLoginState() {
  console.log("winn", window.Fb);
  // Called when a person is finished with the Login Button.
  window.FB.getLoginStatus(function (response) {
    // See the onlogin handler
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function () {
  window.FB.init({
    appId: "1325293871546887",
    cookie: true, // Enable cookies to allow the server to access the session.
    xfbml: true, // Parse social plugins on this webpage.
    version: "v4.0", // Use this Graph API version for this call.
  });

  //   window.FB.getLoginStatus(function (response) {
  //     // Called after the JS SDK has been initialized.
  //     statusChangeCallback(response); // Returns the login status.
  //   });
};

function testAPI() {
  // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log("Welcome!  Fetching your information.... ");
  window.FB.api("/me", function (response) {
    console.log("Successful login for: " + response.name);

    console.log(response.name);
  });
}

//---------------------------------------------

const myf = () => {
  window.FB.getLoginStatus(function (response) {
    console.log(response);

    statusChangeCallback(response); // Returns the login status.
  });
};

const FbLogin = () => {
  return (
    <>
      <button onClick={myf}>FbLogin</button>
      {/* <fb:login-button
        scope="public_profile,email"
        onlogin="checkLoginState();"
      ></fb:login-button> */}
      {/* <button style={{ backgroundColor: "orange" }}>Facebook login</button> */}
    </>
  );
};

export default FbLogin;
