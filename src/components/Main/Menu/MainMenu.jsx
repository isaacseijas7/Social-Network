import React, { useState } from "react";
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
import { HiTag } from "react-icons/hi";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import { Searcher } from "components/Main/Menu/Searcher";
import MainDropdown from "../MainDropdown";

export const MainMenu = () => {
  const [showDropdownUser, setShowDropdownUser] = useState(false);
  const [showDropdownHeart, setShowDropdownHeart] = useState(false);

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
            <Link className="nav-item" to="/">
              {matchHome && matchHome.isExact ? (
                <AiFillHome size="30" />
              ) : (
                <AiOutlineHome size="30" />
              )}
            </Link>
            <Link className="nav-item" to="/direct/inbox">
              {matchInbox && matchInbox.isExact ? (
                <IoChatboxSharp size="30" />
              ) : (
                <IoChatboxOutline size="30" />
              )}
            </Link>
            <Link className="nav-item" to="/explore">
              {matchExplore && matchExplore.isExact ? (
                <IoNavigateCircleSharp size="30" />
              ) : (
                <IoNavigateCircleOutline size="30" />
              )}
            </Link>
            <div className="nav-item pos_relative">
              <FaRegHeart
                size="30"
                className="cursor_pointer"
                onClick={() => {
                  setShowDropdownHeart(!showDropdownHeart);
                }}
              />
              <MainDropdown
                show={showDropdownHeart}
                close={setShowDropdownHeart}
              >
                <div className="dropdown-body">Menu Heart</div>
              </MainDropdown>
            </div>
            <div className="nav-item  pos_relative">
              <BiUserCircle
                size="30"
                className="cursor_pointer"
                onClick={() => {
                  setShowDropdownUser(!showDropdownUser);
                }}
              />
              <MainDropdown
                width={230}
                show={showDropdownUser}
                close={setShowDropdownUser}
              >
                <div className="wrapper-menu-user">
                  <div className="menu-user_item">
                    <span className="user_item-icon">
                      <BiUserCircle size="16" />
                    </span>
                    <span>Perfil</span>
                  </div>
                  <div className="menu-user_item">
                    <span className="user_item-icon">
                      <HiTag size="16" />
                    </span>
                    <span>Guardado</span>
                  </div>
                  <div className="menu-user_item">
                    <span className="user_item-icon">
                      <IoIosSettings size="16" />
                    </span>
                    <span>Configuración</span>
                  </div>
                  <div className="menu-user_item">
                    <span className="user_item-icon">
                      <HiOutlineRefresh size="16" />
                    </span>
                    <span>Cambiar de cuenta</span>
                  </div>
                  <hr/>
                  <div className="menu-user_item">
                    <span>Salir</span>
                  </div>
                </div>
              </MainDropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
