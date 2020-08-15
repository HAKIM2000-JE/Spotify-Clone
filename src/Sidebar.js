import React from "react";
import "./sidebar.css";
import SidebarOption from "./SidebarOption";
import "./sidebarOption.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "./StateProvider";
function Sidebar() {
  const [{ playlists, dispatch }] = useStateValue();
  return (
    <div className="sidebar">
      <img
        src="https://i.ibb.co/3MyDS7M/
      spotify2019-830x350.jpg"
        alt=""
        className="sidebar_logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
      <SidebarOption title="Hip Hop" />
      <SidebarOption title="Rock" />
      <SidebarOption title="Rnb" />
    </div>
  );
}

export default Sidebar;
