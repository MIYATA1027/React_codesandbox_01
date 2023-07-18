import { ReactNode, useState } from "react";
import { Box, Button, Stack } from "@mui/material";

export interface props {
  children: ReactNode;
}

export const Children = ({ children }: props) => {
  console.log("children画面");

  const [count, setCount] = useState(0);

  return (
    <>
      <Box
        sx={{ background: "#FFFF33", marginTop: "30px", textAlign: "center" }}
      >
        children画面
      </Box>
      <Box
        sx={{
          p: "20px",
          background: "LightYellow",
          border: "solid 2px #FFFF33"
        }}
      >
        <div>親画面から子画面のカウント数{children}: (children)</div>

        <Box
          sx={{ background: "#FFFF66", marginTop: "20px", textAlign: "center" }}
        >
          子画面のカウント数{count}
        </Box>

        <Box
          sx={{ p: "20px", background: "white", border: "solid 2px #FFFF66" }}
        >
          <Button variant="contained" onClick={() => setCount(count + 1)}>
            childrenのカウントアップ
          </Button>
          <Button variant="outlined" onClick={() => setCount(0)}>
            childrenのクリア
          </Button>
        </Box>
      </Box>
    </>
  );
};
