import { Button, Stack } from "@mui/material";
import { useContext, useLayoutEffect } from "react";
import { HeaderNameContext } from "./Providers/HeaderName";

export const Home = () => {
  const { setHeaderName } = useContext(HeaderNameContext);

  useLayoutEffect(() => {
    setHeaderName("Home画面");
  });

  return (
    <>
      <p>アンチパターン遷移先画面</p>
      <Stack direction="row" spacing={1}>
        <Button href="/Parent" variant="contained">
          コンポーネント内で別のコンポーネント
        </Button>
      </Stack>

      <p>フック遷移先画面</p>
      <Stack direction="row" spacing={1}>
        <Button href="/Count" variant="contained">
          カウント
        </Button>
        <Button href="/ParentComponent" variant="contained">
          再レンダー
        </Button>
        <Button href="/Memo" variant="contained">
          memo
        </Button>
        <Button href="/Callback" variant="contained">
          callback
        </Button>
      </Stack>
    </>
  );
};
