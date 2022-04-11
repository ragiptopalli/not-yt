import React from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/159px-YouTube_full-color_icon_%282017%29.svg.png?20211015074811"
          alt="NOT YOUTUBE!"
          className="header__logo"
        />
      </Link>
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://yt3.ggpht.com/yti/APfAmoFOLBLAac6V1uwbKWByeGSQBQp_-iD_vHBLwgKj2Q=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
