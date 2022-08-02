import {  useEffect, useState } from 'react';
import axios from "axios";

const API_KEY = "e13gPtqpYwRIHmCSn7IAOS5rHvsX8BOH";
const useFetch = (keyword) => {
  const [gifUrl, setGifUrl] = useState(null);
  
  useEffect(() => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`)
      .then((respons) => {
        setGifUrl(respons.data.data[0]?.images?.downsized_medium?.url)
      })
  }, [keyword]);
  
  return {gifUrl};
 
}

export default useFetch;