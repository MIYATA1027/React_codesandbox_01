import { Button, Stack } from "@mui/material";
import { useContext, useLayoutEffect, useState } from "react";
import { Children } from "./Children";
import { HeaderNameContext } from "./Providers/HeaderName";

export const Count = () => {
  const [count, setCount] = useState(0);
  const { setHeaderName } = useContext(HeaderNameContext);

  useLayoutEffect(() => {
    setHeaderName("カウント画面");
  });

  console.log("カウント画面");

  return (
    <>
      <p>親画面カウント数：{count}</p>
      <Stack direction="row" spacing={1}>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          カウントアップ
        </Button>
        <Button variant="outlined" onClick={() => setCount(0)}>
          クリア
        </Button>
        <Button href="/" variant="outlined">
          戻る
        </Button>
      </Stack>

      <Children>{count}</Children>
    </>
  );
};
