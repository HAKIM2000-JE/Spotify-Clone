import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />

        <input type="text" placeholder="Search for Artist , Songs ...." />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.name} />
        <h4>Hakim Darkboy</h4>
      </div>
    </div>
  );
}

export default Header;
