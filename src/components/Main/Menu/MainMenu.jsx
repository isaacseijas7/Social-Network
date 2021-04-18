import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./MainMenu.scss";

import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import {
  IoChatboxSharp,
  IoChatboxOutline,
  IoNavigateCircleOutline,
  IoNavigateCircleSharp,
} from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { Searcher } from "components/Main/Menu/Searcher";

export const MainMenu = () => {
  const matchHome = useRouteMatch("/");
  const matchInbox = useRouteMatch("/direct/inbox");
  const matchExplore = useRouteMatch("/explore");

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
              {matchHome && matchHome.isExact ? (
                <AiFillHome size="30" />
              ) : (
                <AiOutlineHome size="30" />
              )}
            </Link>
            <Link to="/direct/inbox">
              {matchInbox && matchInbox.isExact ? (
                <IoChatboxSharp size="30" />
              ) : (
                <IoChatboxOutline size="30" />
              )}
            </Link>
            <Link to="/explore">
              {matchExplore && matchExplore.isExact ? (
                <IoNavigateCircleSharp size="30" />
              ) : (
                <IoNavigateCircleOutline size="30" />
              )}
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
