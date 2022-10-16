import React, { useContext } from "react";
import "./styles.scss";
import { GrSearch } from "react-icons/gr";
import MainContext from "../../Context/MainContext";

function Search() {
  const {setSearch} = useContext(MainContext);

  return (
    <div className="search">
      <div className="icon">
        <GrSearch />
      </div>
      <input
        type={"text"}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Brands"
      />
    </div>
  );
}

export default Search;
