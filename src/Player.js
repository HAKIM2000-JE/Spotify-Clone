import React from "react";
import "./player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player(spotify) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <br />
        <Body  spotify={spotify}/>
      </div>
      {/* Sidebar */}

      {/* body */}

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Player;
