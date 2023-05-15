import React, { useState } from "react";
import "./App.css";
import { Card, Image } from "react-bootstrap";
import FacebookLogin from "react-facebook-login";

const LoginByfacebook = () => {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Card style={{ width: "600px" }}>
          <Card.Header>
            {console.log(login)}
            {!login && (
              <FacebookLogin
                appId="1325293871546887"
                // autoLoad={true}
                fields="name,email,picture"
                // scope="public_profile,user_friends"
                callback={responseFacebook}
                icon="fa-facebook"
              />
            )}
            {login && <Image src={picture} roundedCircle />}
          </Card.Header>
          {login && (
            <Card.Body>
              {console.log(data)}
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.email}</Card.Text>
            </Card.Body>
          )}
        </Card>
      </div>
    </>
  );
};

export default LoginByfacebook;
