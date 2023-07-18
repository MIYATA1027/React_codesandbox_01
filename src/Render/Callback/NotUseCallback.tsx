import { Button } from "@mui/material";
import { useCallback } from "react";
import { useContext, useLayoutEffect, useState } from "react";
import { HeaderNameContext } from "../../Providers/HeaderName";

type numProps = {
  count: number;
};

const Count = ({ count }: numProps) => {
  console.log("Count");
  return <p>+1カウント:{count}</p>;
};

const TenCount = ({ count }: numProps) => {
  console.log("TenCount");
  return <p>+1カウント:{count}</p>;
};

export const NotUseCallback = () => {
  const { setHeaderName } = useContext(HeaderNameContext);
  useLayoutEffect(() => {
    setHeaderName("Callback");
  });

  const [count, setCount] = useState(0);
  const [tenCount, setTenCount] = useState(0);
  // +1ボタン押下時イベントハンドラ
  const onClickHandler = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // +10ボタン押下時イベントハンドラ
  const onClickTenHandler = useCallback(() => {
    setTenCount(tenCount + 10);
  }, [tenCount]);

  return (
    <>
      <Count count={count} />
      <Button variant="contained" onClick={onClickHandler}>
        +1
      </Button>
      <TenCount count={tenCount} />
      <Button variant="contained" onClick={onClickTenHandler}>
        +10
      </Button>
    </>
  );
};
