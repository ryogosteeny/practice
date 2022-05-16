import React from "react";
import "./Nav.css";

interface NavType {
  name: string;
}

export const LocalNav = () => {
  const localNavMenu: NavType[] = [
    {
      name: "TODO",
      // todo 各コンポーネントへ遷移する関数を入れる
    },
    {
      name: "映画作品",
      // todo 各コンポーネントへ遷移する関数を入れる
    },
    {
      // todo 各コンポーネントへ遷移する関数を入れる
      name: "ComingSoon",
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
            <li className="nav-list__item" key={navItem.name}>
              {navItem.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

// TODO 各ページへ遷移させる
