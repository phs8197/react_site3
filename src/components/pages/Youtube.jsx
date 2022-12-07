import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import YoutubeCont from "../include/YoutubeCont";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeSearch from "../include/YoutubeSearch";
import Title from "../layout/Title";
import Contact from "../layout/Contact";

function Youtube() {
  const [videos, setVideos] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD0FU5MK-GKZW_1G31J6lHbBoN0JEY5MCU&maxResults=24&regionCode=KR&q=${query}`
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=24&key=AIzaSyD0FU5MK-GKZW_1G31J6lHbBoN0JEY5MCU`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  // const Youtube = () => {
  //   const [youtube, setYoutube] = useState();

  //   const getYoutube = async () => {
  //     const res = await fetch(
  //       "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=25&key=AIzaSyD0FU5MK-GKZW_1G31J6lHbBoN0JEY5MCU"
  //     );
  //     const response = await res.json();
  //     setYoutube(response.items);
  //     console.log(response.items[0].snippet.thumbnails.medium);
  //   };

  //   const res2 = fetch(
  //     "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD0FU5MK-GKZW_1G31J6lHbBoN0JEY5MCU"
  //   );
  //   const response2 = res2.json();
  //   console.log(response2);

  //   getYoutube();

  return (
    <>
      <Header />
      <Contents>
        <Title title={["youtube", "reference api"]} />
        <YoutubeSlider videos={videos} />
        <YoutubeSearch onSearch={search} />
        <YoutubeCont videos={videos} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}
export default Youtube;
