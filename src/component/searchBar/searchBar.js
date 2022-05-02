import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";
import {MenuItem, TextField} from '@mui/material'
import { Box } from "@mui/system";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <TextField
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon style={{ fontSize: 50 }} />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} style={{ fontSize: 50 }} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <Box className= "dataResult">
          <MenuItem className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <ul className="dataResultValue">
                  <li>
                  <Box>
                    <Link 
                      to={`/${value.category}`}
                      state=
                      {{
                        image:value.image,
                        title:value.title,
                        category:value.category,
                        description: value.description
                      }
                    } >
                      {value.title}
                    </Link>
                  </Box>

                  </li>
                </ul>
                
              );
            })}
          </MenuItem>
        </Box>
      )}
    </div>
  );
}

export default SearchBar;