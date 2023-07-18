import { Button, Stack } from "@mui/material";
import { useContext, useLayoutEffect } from "react";
import { HeaderNameContext } from "../../Providers/HeaderName";

export const Callback = () => {
  const { setHeaderName } = useContext(HeaderNameContext);

  useLayoutEffect(() => {
    setHeaderName("Home画面");
  });

  return (
    <>
      <p>遷移先画面</p>
      <Stack direction="row" spacing={1}>
        <Button href="/CustomCallback" variant="contained">
          Callback
        </Button>
        <Button href="/NotUseCallback" variant="contained">
          NotUseCallback
        </Button>
      </Stack>
    </>
  );
};
