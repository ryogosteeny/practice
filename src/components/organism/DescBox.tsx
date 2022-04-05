import React, { useState } from "react";
import { DescHead } from "../atoms/DescHead";
import { DescBoxTxt } from "../atoms/DescBoxTxt";
import { HideButton } from "../atoms/HideButton";

export const DescBox = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  console.log("DescBox");

  const handleIsVisibleHidden = () => {
    setIsVisible(!isVisible);
  };

  const handleIsVisibleDisplay = () => {
    setIsVisible(true);
  };

  return (
    <div>
      <DescHead />
      <DescBoxTxt isVisible={isVisible} />
      {isVisible ? (
        <HideButton onClick={handleIsVisibleHidden} btnText={"非表示にする"} />
      ) : (
        <HideButton onClick={handleIsVisibleDisplay} btnText={"表示する"} />
      )}
    </div>
  );
};
