import { FC, useState } from "react";
import axios from "axios";

const SearchCatAPI: FC = () => {
  return (
    <>
      <div>
        <h1>Looking for a Photo?</h1>
        <label>
          Type ID Here: &nbsp;
          <input type="text" />
        </label>
      </div>
    </>
  );
};

export default SearchCatAPI;

// GOAL:
// When the user types in the id into the search bar,
// that id is put into the API url and it retrieves the
// photo that matches the id
