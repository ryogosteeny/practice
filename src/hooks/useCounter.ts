import { useCallback, useMemo, useState } from "react";

/**
 *   結論　カスタムフックを使用することで...
 *
 *   余計なstateを減らすことができる
 *   汎用的にロジックが使える
 *
 *   注意すべきは...
 *   カスタムフックは常にコンポーネントに対して一対一で使用する
 *   同じカスタムフックは一ファイル一つしか使用できない
 *   トップのコンポーネントで複数に渡した場合一つのカスタムフックに依存してしまうので注意
 */
export const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  /**
   * @see {useCallback}
   * useCallBackまとめ
   * コールバック関数の再レンダリング時の関数の再生成を防ぐ為のhooks
   * React.memoと併用して使う
   * memoと同じ箇所で使用しなければ再レンダーを防げないので注意
   *  Q なぜReact.memoとuseCallBackは一緒ではないといけないのか?
   *  H React.memoがあってcallがない場合、関数はレンダリング毎に新しく生成されるから再レンダーしてしまう
   *  H callがあってmemoがない場合、親にレンダリングがあれば子は再レンダーしてしまうから
   *
   */
  const handleCountUpCallBack = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []); // 初回レンダリング時のみレンダーされる

  return { count, handleCountUpCallBack };
};
