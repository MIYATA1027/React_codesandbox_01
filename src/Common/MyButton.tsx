import { Button, styled } from "@mui/material";

export type buttonProps = {};

export const MyButton = ({ children }) => {
  // const styledButton = styled((Button) => {
  //   [`.&Buttonclass.root`];
  // });

  return <Button>{children}</Button>;
};
