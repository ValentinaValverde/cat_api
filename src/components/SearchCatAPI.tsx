import { FC, useState } from "react";
import axios from "axios";

const SearchCatAPI: FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageID, setImageID] = useState(" ");

  const handleSubmit = async () => {
    event?.preventDefault();
    console.log("working!");

    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.thecatapi.com/v1/images/${imageID}.jpg`
      );
      console.log("DATA", data);
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageID(event?.target.value);
  };

  return (
    <>
      <div>
        <h1>Looking for a Photo?</h1>
        <form>
          <input type="text" onChange={handleChange} />
          <button onClick={handleSubmit}>Search</button>
          {loading && <p>Loading...</p>}
        </form>
      </div>
    </>
  );
};

export default SearchCatAPI;

// GOAL:
// When the user types in the id into the search bar,
// that id is put into the API url and it retrieves the
// photo that matches the id

// https://api.thecatapi.com/v1/images/{imageID}

// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUsername(event.target.value);
// };
