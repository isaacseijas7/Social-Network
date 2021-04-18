import React from "react";
import { Link } from "react-router-dom";
import "./MainMenu.scss";

import { AiOutlineHome } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { Searcher } from "components/Main/Menu/Searcher";

export const MainMenu = () => {
  return (
    <nav className="nav">
      <div className="contenedor-nav">
        <div className="grid-nav">
          <div className="logo">
            <Link to="/">Social Network</Link>
          </div>
          <Searcher />
          <div className="items-nav">
            <Link to="/">
              <AiOutlineHome size="30" />
            </Link>
            <Link to="/direct/inbox">
              <TiMessages size="30" />
            </Link>
            <Link to="/explore">
              <IoNavigateCircleOutline size="30" />
            </Link>
            <Link to="/">
              <FaRegHeart size="30" />
            </Link>
            <Link to="/">
              <BiUserCircle size="30" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
