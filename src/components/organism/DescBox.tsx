import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../atoms/Header";
import { DescHead } from "../atoms/DescHead";
import { DescBoxTxt } from "../atoms/DescBoxTxt";
import { MainButton } from "../atoms/MainButton";
import { LocalNav } from "../atoms/LocalNav";
import "./Film.css";

export const DescBox = () => {
  const navigate = useNavigate();
  const toMovies = useCallback(() => navigate("/movies"), []); // todo パフォーマンスが良いのか調査する
  return (
    <div>
      <div className="page__header__color">
        <Header title={"サイト概要"} />
      </div>
      <div className="content-has-column">
        <main className="content__main">
          <div className="desc-box">
            {/*  TODO コンテンツを真ん中に配置したいならdesc-boxをcssに追加、どのファイルに入れるか悩む*/}
            <DescHead title={"このサイトについて"} />
            <DescBoxTxt
              description={
                "映画を検索するサイトです好きな映画を検索してみましょう"
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
