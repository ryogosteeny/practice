import React, { useState } from "react";
import { Header } from "../atoms/Header";
import { LocalNav } from "../atoms/LocalNav";
import { TextField } from "../atoms/TextField";
import { MainButton } from "../atoms/MainButton";
import "./Contact.css";
import "./PageLy.css";

interface FormInputInfoType {
  [K: string]: {
    input: string;
    isHelp: boolean;
    helpMessage?: string;
  };
}

export const Contact = () => {
  const [formInputInfo, setFormInputInfo] = useState<FormInputInfoType>({
    userName: {
      input: "",
      isHelp: false,
      helpMessage: "",
    },
    mailAddress: {
      input: "",
      isHelp: false,
    },
    phoneNumber: {
      input: "",
      isHelp: false,
      helpMessage: "",
    },
  });
  const { userName, mailAddress, phoneNumber } = formInputInfo;
  const phoneNumberRegExp = /\d{6,}/g;
  const userNameRegExp = /^[^\x20-\x7e]{2,}$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInputInfo({
      ...formInputInfo,
      [e.target.name]: { input: e.target.value, isHelp: false },
    });
  };

  const handleSubmitChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  // 　フォーム部分の流れ(最低条件 必須項目だけ埋める)
  // 1,名前　>> 電話番号　を入力する >> 入力する関数が必要,入力の状態を保持しとくstateが必要
  //   どういうstateにするか(見た目を左右するものはstateで持つ(例外あり))？　>> 入力,バリデーションの表示フラグ,再入力のメッセージ
  //   todo メッセージだけ別のstateで持つ必要があるのか？
  //   todo stateを多く管理するデメリットを調査する
  //   todo メッセージを表示するフラグ、メッセージは入力のstateと別で定義する >> 入力していた値が消える可能性がある(一緒にして試してダメだったら別で)
  //
  //   入力する関数はどういう風にするのか？　>> 複数入力する箇所がある為、stateはオブジェクト型にする

  // 2,送信ボタン　をクリックする >> 送信する関数が必要,postのエンドポイントが必要,ユーザーに報告する必要がある

  // 3,バリデーションチェックをする >> バリデーションをする関数が必要
  //   どういうバリデーション関数にするのか？

  //    それぞれのバリデーション条件を決める >>
  //    名前: 文字入力で2文字以上のみ受け入れる
  //    メール: 半角アルファベットで@からはフォーマット通りであれば受け入れる
  //    電話: 半角数字の6文字以上入力して入れば受け入れる

  //    バリデーションは各inputの値にかける

  //    それぞれの再入力の際のメッセージを出す >> バリデーション条件を書いてあげる

  //    メッセージを出すケース(必須項目3つのパターン)
  //    3つ同時に出す　　　　　メッセージパターンは2パターン　　　　　　別でstateを定義するならば3つstateが必要になる
  //    1つ以上それぞれ出す
  //
  //
  //
  //    この結果が送信するのかしないのかを決める

  // 4,送信してユーザーに報告する or バリデーションの結果を元に該当の箇所に再入力を促す >> 送信か再入力かの分岐点を作成するものが必要

  return (
    <div>
      <Header title={"お問い合わせ"} />
      <div className="content-has-column">
        <main className="content__main">
          <div className="form-area">
            <form>
              <div className="user-name-area">
                <TextField
                  label={"お名前"}
                  placeholder={"山田太郎"}
                  type={"text"}
                  name={"userName"}
                  helperText={`※ ${userName.helpMessage}`}
                  isHelperText={userName.isHelp}
                  maxLength={20}
                  value={userName.input}
                  requiredLabel={"required"}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mail-address-area">
                <TextField
                  label={"メールアドレス"}
                  type={"email"}
                  name={"mailAddress"}
                  maxLength={50}
                  value={mailAddress.input}
                  requiredLabel={"required"}
                  onChange={handleInputChange}
                />
              </div>
              <div className="phone-number-area">
                <TextField
                  label={"電話番号"}
                  placeholder={"ハイフンなし"}
                  type={"text"}
                  name={"phoneNumber"}
                  helperText={`※ ${phoneNumber.helpMessage}`}
                  isHelperText={phoneNumber.isHelp}
                  maxLength={11}
                  requiredLabel={"required"}
                  value={phoneNumber.input}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text-area-box">
                <textarea className="text-area" rows={16} />
              </div>{" "}
              <div className="text-area-box">
                <textarea className="text-area" rows={16} />
              </div>
              <div className="submit-area">
                <MainButton
                  btnText={"送信"}
                  type={"submit"}
                  onClick={handleSubmitChange}
                />
              </div>
            </form>
          </div>
        </main>
        <aside className="content__side">
          <LocalNav />
        </aside>
      </div>
    </div>
  );
};

// TODO F2ではリアクティブにエラーメッセージを表示させるしボタンは条件を満たさない場合はdisableにしとく
// TODO これはTemplateになってる為organismようにもうちょっと粒度を下げて作成する