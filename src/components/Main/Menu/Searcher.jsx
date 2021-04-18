import React, { useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { ImSpinner3 } from "react-icons/im";
import UserList from "../UserList";
import { searchInArrayObject } from "utils";
import dataUsers from "assets/data/users";

export const Searcher = () => {
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");
  const [seeInput, setSeeInput] = useState(false);
  const [searching, setSearching] = useState(false);
  const [users, setUsers] = useState([]);

  const showInput = () => {
    setSeeInput(true);
    inputRef.current.focus();
  };

  const hideInput = () => {
    setSeeInput(false);
    setSearching(false);
    setUsers([]);
    setSearch("");
  };

  const writingSearch = ({ target }) => {
    setSearch(target.value);
    const resunts = searchInArrayObject(dataUsers, target.value, [
      "full_name",
      "username",
    ]);
    setUsers(resunts);
    if (target.value.length === 0) {
      setSearching(false);
    }
  };

  return (
    <div className="searcher">
      <input
        type="text"
        ref={inputRef}
        value={search}
        autoCapitalize="none"
        placeholder="Buscar"
        onBlur={() => {
          setSearching(false);
          setTimeout(() => {
            setSeeInput(false);
          }, 300);
        }}
        onChange={writingSearch}
      />
      {!seeInput && (
        <div
          className="wrapper-finder-controller"
          onClick={showInput}
          role="button"
          tabIndex="0"
        >
          <div className="finder-controller">
            <MdSearch className="search-icon" size="14" />
            <span className="placeholder">
              {search.length > 0 ? search.slice(0, 15) : "Buscar"}
            </span>
          </div>
        </div>
      )}
      {seeInput && (
        <>
          <MdSearch color="#8e8e8e" className="search-icon-core" size="14" />
          {searching ? (
            <ImSpinner3
              color="#8e8e8e"
              className="search-icon-spinner"
              size="14"
            />
          ) : (
            <AiFillCloseCircle
              onClick={hideInput}
              color="#8e8e8e"
              className="search-icon-close"
              size="14"
            />
          )}
          <div className="wrapper-dropdown">
            <div className="dropdown">
              <div className="dropdown-arrow" />
              <div className="dropdown-card">
                <div className="dropdown-card-wrapper">
                  {Array.isArray(users) && users.length > 0 && (
                    <UserList users={users} />
                  )}
                  {Array.isArray(users) && users.length === 0 && (
                    <>
                      <div className="dropdown-head">
                        <h4 className="dropdown-head_title">Recientes</h4>
                      </div>
                      <div className="dropdown-body">
                        <div>No hay búsquedas recientes.</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
