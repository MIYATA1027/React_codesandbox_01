import { Button } from "@mui/material";
import { useContext, useLayoutEffect, useState } from "react";
import { HeaderNameContext } from "../Providers/HeaderName";

export const Parent = () => {
  const { setHeaderName } = useContext(HeaderNameContext);
  useLayoutEffect(() => {
    setHeaderName("アンチパターン画面");
  });

  const Child = () => {
    // 重い親処理
    const foo = () => {
      const now = performance.now();
      while (performance.now() - now < 200) {}
    };

    return <p>これはParent内で定義されたChildです</p>;
  };

  const [count, setCount] = useState(0);

  return (
    <>
      <Child />
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        再レンダー
      </Button>
      <Button href="/" variant="outlined">
        戻る
      </Button>
    </>
  );
};
