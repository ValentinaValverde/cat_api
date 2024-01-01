import { FC, useState } from "react";
import axios from "axios";

const CatAPI: FC = () => {
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const handleClick = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      console.log("DATA", data);

      // something to do with types:
      data.map((data) => {
        console.log("URL", data.url);
        setImgUrl(data.url);
      });
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Cat API</h1>
        <button className="button" onClick={handleClick}>
          Generate Cat Image
        </button>
        {loading && <p>Loading...</p>}
        <img className="cat_image" src={imgUrl} />
      </div>
    </>
  );
};

export default CatAPI;
