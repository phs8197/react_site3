import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__inner">
        <div>
          <h3>email</h3>
          <a href="mailto:webstoryboy@naver.com">pjk1245@naver.com</a>
        </div>
        <div>
          <h3>kakao</h3>
          <a href="/react_site3">phs8197</a>
        </div>
        <div>
          <h3>social</h3>
          <ul>
            <li>
              <a href="/react_site3">youtube</a>
            </li>
            <li>
              <a href="/react_site3">instargram</a>
            </li>
            <li>
              <a href="/react_site3">github</a>
            </li>
            <li>
              <a href="/react_site3">blog</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
