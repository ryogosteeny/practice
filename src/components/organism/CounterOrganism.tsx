import React from "react";
import { Header } from "../atoms/Header";
import { Title } from "../atoms/Title";
import { SubTitle } from "../atoms/SubTitle";
import { Counter } from "../molecules/Counter";
import { LocalNav } from "../atoms/LocalNav";
import "./CounterOrganism.css";
import "./PageLy.css";

export const CounterOrganism = () => {
  return (
    <div>
      <Header title={"Counter"} />
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
