import { FC, Fragment } from "react";
import { Active } from "./Active";
import { Background } from "./Background";
import { Cells } from "./Cells";

export const Fields: FC = () => {
  return (
    <Fragment>
      <Background />
      <Cells />
      <Active />
    </Fragment>
  );
};
