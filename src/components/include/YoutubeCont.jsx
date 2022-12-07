// const YoutubeItem = (props) => {
//   return (
//     <li>
//       <a href="/">
//         <img src={Youtube.items.snippet.thumbnails.medium.url} />
//       </a>
//     </li>
//   );
// };
// const YoutubeCont = (props) => {
//   return (
//     <section className="cont__movie">
//       <div className="container">
//         <div className="movie__inner">
//           <ul>
//             {props.youtube.map((Youtube) => (
//               <YoutubeItem key={Youtube.id} Youtube={Youtube} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };
import React from "react";

const YoutubeItem = (props) => (
  <li>
    <a href="/">
      <img src={props.video.snippet.thumbnails.high.url} />
    </a>
  </li>
);

const YoutubeCont = (props) => {
  return (
    <section className="cont__movie">
      <div className="container">
        <div className="movie__inner">
          <ul>
            {props.videos.map((video) => (
              <YoutubeItem key={video.id} video={video} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default YoutubeCont;
