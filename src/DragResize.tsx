import React, { useState } from "react";
import { css } from "@emotion/react";
import { Position, ResizableDelta, Rnd, RndResizeCallback } from "react-rnd";

interface ResizeDirection {
  dir: HTMLDivElement;
}

export const DragResize = () => {
  const [width, setWidth] = useState<number>(248); // 親からもろた幅の状態
  console.log(width);

  const toggleLocalNav = () => {
    if (width > 20) {
      setWidth(20);
    } else {
      setWidth(248);
    }
  };

  // ボタンを押したら画面幅が広がる
  const spreadWidth = () => {
    setWidth((prevState: number) => prevState + 1);
  };

  const onResize: RndResizeCallback = (
    e: MouseEvent | TouchEvent,
    dir: any,
    ref: any
  ): void => {
    setWidth(ref.offsetWidth);
  };
  return (
    <Rnd
      size={{ width: width, height: "100%" }}
      onResize={onResize}
      maxWidth={"50%"}
      disableDragging={true}
      enableResizing={{
        top: false,
        left: false,
        bottom: false,
        right: true,
        bottomLeft: false,
        bottomRight: false,
        topLeft: false,
        topRight: false,
      }}
      minWidth={20}
    >
      <div css={componentContainerStyle}>
        <div css={contentsWrapStyle(width)}>
          <div css={localNavContainer}>
            <nav css={localNavWrap}>
              <div css={projectNameBlock}>
                <span css={projectNameWrap}>
                  <h2 css={projectNameStyle}>{"プロジェクト"}</h2>
                  <span css={projectCategoryStyle}>
                    ソフトウェア プロジェクト
                  </span>
                </span>
              </div>

              <div css={navMenuBlock}>
                <ul>
                  <div css={navItem}>
                    <div css={navItemIconStyle}>{"ち"}</div>
                    <div>
                      <li css={navItemMenuStyle}>{"りんご"}</li>
                      <li css={navItemMenuStyle}>{"りんご"}</li>
                      <li css={navItemMenuStyle}>{"りんご"}</li>
                      <li css={navItemMenuStyle}>{"りんご"}</li>
                    </div>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div css={resizeContainerStyle}>
          <div css={resizeLineStyle} />
          <button css={dragResizeButtonStyle} onMouseDown={spreadWidth}>
            <span css={innerButtonStyle} />
          </button>
          <button css={resizeButtonStyle} onClick={toggleLocalNav}>
            <span css={storageLocalNavStyle}>
              <h1>リサイず</h1>
            </span>
          </button>
        </div>
      </div>
    </Rnd>
  );
};
const componentContainerStyle = css`
  position: relative;
`;

const contentsWrapStyle = (currentWidth: number) => css`
  position: fixed;
  width: 100%;
  visibility: visible;
  transition: 50ms ease;
  opacity: 1;
  resize: horizontal;
  overflow: hidden auto;
  height: 100%;
`;

const localNavContainer = css`
  height: 100%;
  transition: 200ms ease;
  width: inherit;
  min-width: 248px;
  background-color: brown;
`;

const localNavWrap = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  min-width: 248px;
`;

const projectNameBlock = css`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  padding: 8px 10px;
`;

const projectNameWrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  text-align: left;
  position: relative;
  top: 20px;
`;

const projectNameStyle = css`
  font-size: 1.4rem;
  font-weight: 600;
`;

const projectCategoryStyle = css`
  font-size: 1.2rem;
  display: block;
  margin-top: 2.5px;
`;

const navMenuBlock = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0 8px;
`;

const navItem = css`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  span {
    opacity: 0;
  }
  :hover {
    background-color: blueviolet;
    border-radius: 6px;
    transition: all 400ms ease;
    span {
      opacity: 1;
    }
  }
`;

const navItemIconStyle = css`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const navItemMenuStyle = css`
  font-size: 1.6rem;
  white-space: nowrap;
`;

// const navItemArrowStyle = css`
//   padding-top: 2px;
//   margin-left: 8px;
//   display: block;
// `;

const resizeContainerStyle = css`
  left: 100%; // ここ変更した1月23日午前4じ
  top: 0;
  bottom: 0;
  position: absolute;
  width: 3px;
  transition: 30ms ease;
  :hover {
    background-color: blue;
  }
`;

const resizeLineStyle = css`
  width: 3px;
  height: 100%;
  opacity: 0.5;
  background-color: bisque;
  position: absolute;
`;

const dragResizeButtonStyle = css`
  cursor: ew-resize;
  height: 100%;
  width: 24px;
  padding: 0;
  opacity: 0;
`;

const innerButtonStyle = css`
  display: block;
  height: 100%;
  transition: background-color 200ms ease 0s;
  width: 2px;
  z-index: 3;
`;

const resizeButtonStyle = css`
  position: absolute;
  top: 48px;
  left: -10px;
  z-index: 8;
  transform: rotateY(180deg);
  cursor: pointer;
  padding: 0 0;
`;

const storageLocalNavStyle = css`
  display: inline-block;
  width: 24px;
  height: 24px;
`;
