import React, { useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";

export const Searcher = () => {
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");
  const [seeInput, setSeeInput] = useState(false);

  const showInput = () => {
    setSeeInput(true);
    inputRef.current.focus();
  };

  const hideInput = () => {
    setSeeInput(false);
    setSearch("");
  };

  return (
    <div className="searcher">
      <input
        type="text"
        ref={inputRef}
        value={search}
        autoCapitalize="none"
        placeholder="Buscar"
        onBlur={hideInput}
        onChange={({ target }) => setSearch(target.value)}
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
            <span className="placeholder">Buscar</span>
          </div>
        </div>
      )}
      {seeInput && (
        <>
          <MdSearch color="#8e8e8e" className="search-icon-core" size="14" />
          <AiFillCloseCircle
            onClick={hideInput}
            color="#8e8e8e"
            className="search-icon-close"
            size="14"
          />
          <div className="wrapper-dropdown">
            <div className="dropdown">
              <div className="dropdown-arrow" />
              <div className="dropdown-card">
                <div className="dropdown-card-wrapper" >
                  <div className="dropdown-head">
                    <h4 className="dropdown-head_title">Recientes</h4>
                  </div>
                  <div className="dropdown-body">
                    <div>No hay búsquedas recientes.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
