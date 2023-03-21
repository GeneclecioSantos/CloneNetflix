import React from "react";
import "./Header.css";
import LogoNetflix from "../../images/LogoNetflix.png";
import AvatarNetflix from "../../images/netflixAvatar.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src={LogoNetflix} alt="Logo Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src={AvatarNetflix} alt="Imagem Usuário" />
        </a>
      </div>
    </header>
  );
};
