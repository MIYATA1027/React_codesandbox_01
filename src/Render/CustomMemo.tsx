import { Button } from "@mui/material";
import { memo, useEffect } from "react";
import { useContext, useLayoutEffect, useState } from "react";
import { HeaderNameContext } from "../Providers/HeaderName";

const HeavyFunc = memo(() => {
  // 時間のかかる処理
  const now = performance.now();
  while (performance.now() - now < 1000) {}
  return <p>時間のかかるコンポーネント</p>;
});

export const CustomMemo = () => {
  const { setHeaderName } = useContext(HeaderNameContext);
  useLayoutEffect(() => {
    setHeaderName("再レンダー親画面");
  });

  const startTime = performance.now(); // 開始時間
  const [count, setCount] = useState(0);

  useEffect(() => {
    const endTime = performance.now(); // 終了時間
    console.log(`CustomMemoにかかった時間${endTime - startTime}ミリ秒`);
  });

  return (
    <>
      <HeavyFunc />
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        レンダー
      </Button>
    </>
  );
};
