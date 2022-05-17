import React from "react";
import { useNavigate } from "react-router-dom";
import "../organism/Nav.css";

interface NavType {
  name: string;
  transition: () => void;
}

export const LocalNav = () => {
  const navigate = useNavigate();

  const localNavMenu: NavType[] = [
    {
      name: "HOME",
      transition: () => navigate("/"),
    },
    {
      name: "映画作品",
      transition: () => navigate("/movies"),
    },
    {
      name: "ComingSoon",
      transition: () => navigate("/comingSoon"),
    },
  ];

  return (
    <div className="local-nav">
      <div className="nav-box local-nav__height-20">
        <h2 className="nav-title">メニューリスト</h2>
      </div>
      <nav>
        <ul className="nav-list">
          {localNavMenu.map((navItem) => (
            <li
              className="nav-list__item"
              key={navItem.name}
              onClick={navItem.transition}
            >
              {navItem.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
