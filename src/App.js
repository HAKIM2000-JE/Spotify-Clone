import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import "./App.css";
import Login from "./Login";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useStateValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    // console.log("Yeah we got the token ", token);

    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      // Link between REACT Context Api and spotify web API

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, []);
  // console.log(user);
  // console.log(token);

  spotify.getPlaylist("6SECA3mdHCojouFCW6CKDL").then((Response) => {
    dispatch({
      type: "SET_DISCOVER_WEEKLY",
      discover_weekly: Response,
    });
  });

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
