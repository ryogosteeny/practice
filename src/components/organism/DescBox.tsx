import React from "react";
import { DescHead } from "../atoms/DescHead";
import { DescBoxTxt } from "../atoms/DescBoxTxt";
import { MainButton } from "../atoms/MainButton";
import { Header } from "../atoms/Header";
import { LocalNav } from "./LocalNav";
import "./Film.css";

export const DescBox = () => {
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
            <MainButton
              onClick={() => alert("ページを遷移する")} // todo ここは関数を受け取れるようにする
              btnText={"映画を探す"}
            />
          </div>
        </main>
        <aside className="content__side">
          <LocalNav />
        </aside>
      </div>
    </div>
  );
};
