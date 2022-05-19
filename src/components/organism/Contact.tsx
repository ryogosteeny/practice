import React, { useState } from "react";

export const Contact = () => {
  return (
    <form>
      <label>
        お名前 :
        <input name="userName" type="text" />
      </label>
      <br />
      <label>
        メールアドレス :
        <input name="mailAddress" type="email" />
      </label>
      <label>
        電話番号 :
        <input name="phoneNumber" type="text" />
      </label>
      <br />
      <textarea />
      <input name="submit" type="submit" />
    </form>
  );
};

// label名、name属性、type属性はそれぞれ違う
