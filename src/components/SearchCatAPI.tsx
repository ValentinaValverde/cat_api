import { FC, useState } from "react";
import axios from "axios";

const SearchCatAPI: FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageID, setImageID] = useState(" ");
  //   const [error, setError] = useState(" ");

  const handleSubmit = async () => {
    event?.preventDefault();
    console.log("working!");

    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.thecatapi.com/v1/images/${imageID}`
      );
      console.log("DATA", data);
      setImageID(data.url);
    } catch (error) {
      console.log("ERROR", error);
      //   setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageID(event?.target.value);
  };

  return (
    <>
      <div className="image_search">
        <h1>Looking for a Photo?</h1>
        <p>type image id below:</p>
        <form>
          <input type="text" onChange={handleChange} className="input" />
          <button onClick={handleSubmit}>Search</button>
        </form>
        {loading && <p>Loading...</p>}
        <img className="cat_image" src={imageID} />
        {/* <p>{error}</p> */}
      </div>
    </>
  );
};

export default SearchCatAPI;

// TO ADD:
// - refactor to use await instead of axios
// - add a backup in case the ID doesn't match anything
// - next step: search by breed :o
