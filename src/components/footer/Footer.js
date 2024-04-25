import "./Footer.scss";

import { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import emoji from "react-easy-emoji";

const Footer = () => {
  const { isDark } = useContext(StyleContext);
  return (
    <div className="footer-div">
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        {emoji("@copyright 2024 All rights reserved ")}
      </p>
    </div>
  );
};
export default Footer;
