import React from "react";

const UnsplashItem = (props) => {
  return (
    <li>
      <a href="/">
        <img src={props.picture.urls.regular} />
      </a>
    </li>
  );
};
const UnsplashCont = (props) => {
  return (
    <section className="cont__movie">
      <div className="container">
        <div className="movie__inner">
          <ul>
            {props.pictures.map((picture) => (
              <UnsplashItem key={picture.id} picture={picture} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default UnsplashCont;
