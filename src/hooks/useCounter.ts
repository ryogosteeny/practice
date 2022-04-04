import React from "react";

export const useCustomCounter = (initialCount: number) => {
  const [count, setCount] = React.useState(initialCount);

  const increment = React.useCallback(() => setCount((count) => count + 1), []);

  const decrement = React.useCallback(
    () => setCount((count) => count + -1),
    []
  );

  return { count, increment, decrement };
};
