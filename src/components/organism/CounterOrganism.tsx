import React from "react";
import { Counter } from "../atoms/Counter";
import { Title } from "../atoms/Title";
import { SubTitle } from "../atoms/SubTitle";
import "./CounterOrganism.css";
import "./Film.css";
import { LocalNav } from "./LocalNav";
import { Header } from "../atoms/Header";

export const CounterOrganism = () => {
  return (
    <div>
      <div className="page__header__color">
        <Header title={"Counter"} />
      </div>
      <div className="content-has-column">
        <main className="content__main">
          <div className="item item-layout">
            <Title titleText={"どんな機能を追加して欲しいか"} />
            <SubTitle subTitleText={"緊急アンケート"} />
            <div className="itemList">
              <div className="itemCounter">
                <Counter counterTitle={"Aの機能"} buttonText={"もちろんA"} />
              </div>
              <div className="itemCounter">
                <Counter counterTitle={"Bの機能"} buttonText={"もちろんB"} />
              </div>
            </div>
          </div>
        </main>
        <aside className="content__side">
          <LocalNav />
        </aside>
      </div>
    </div>
  );
};

// Todo どこにheightを入れればコンテンツの高さでバックグランドカラーが適用されるのか?
