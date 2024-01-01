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
      console.log(
        "DATA",
        // something to do with types:
        data.map((data) => {
          console.log("URL", data.url);
          setImgUrl(data.url);
        })
      );
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <p>hello from CAT API</p>
      <button onClick={handleClick}>Button</button>
      {loading && <p>Loading...</p>}
      <img src={imgUrl} />
    </>
  );
};

export default CatAPI;
