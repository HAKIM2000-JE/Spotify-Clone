import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      {/* Spotify Logo */}

      <img
        src="https://i.ibb.co/3MyDS7M/
      spotify2019-830x350.jpg"
        alt="image"
      />
      {/* Login Spotify */}
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
}

export default Login;
