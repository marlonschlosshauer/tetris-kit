import { FC, Fragment } from "react";
import { Active } from "./Active/Active";
import { Background } from "./Background/Background";
import { Blocks } from "./Blocks/Blocks";

export const Fields: FC = () => {
  return (
    <Fragment>
      <Background />
      <Blocks />
      <Active />
    </Fragment>
  );
};
