import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../atoms/Header";
import { DescHead } from "../atoms/DescHead";
import { DescBoxTxt } from "../atoms/DescBoxTxt";
import { MainButton } from "../atoms/MainButton";
import { LocalNav } from "../atoms/LocalNav";
import "./PageLy.css";

export const DescBox = () => {
  const navigate = useNavigate();
  const toMovies = () => navigate("/movies");

  return (
    <div>
      <Header title={"サイト概要"} />
      <div className="content-has-column">
        <main className="content__main">
          <div className="desc-box">
            {/*TODO あまりこの命名はいけてない、変更した方が良さそう*/}
            <DescHead title={"このサイトについて"} />
            <DescBoxTxt
              description={
                "映画を検索するサイトです好きな映画を検索してみましょうまた今後いろんな機能を盛り込んでいくのでぜひ期待していてください"
              }
            />
            <MainButton onClick={toMovies} btnText={"映画を探す"} />
          </div>
        </main>
        <aside className="content__side">
          <LocalNav />
        </aside>
      </div>
    </div>
  );
};
