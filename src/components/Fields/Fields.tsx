import { FC, Fragment } from "react";
import { Active } from "./Active/Active";
import { Background } from "./Background/Background";
import { Blocks } from "./Blocks/Blocks";
import { Ghost } from "./Ghost/Ghost";

export const Fields: FC = () => {
    return (
        <Fragment>
            <Background />
            <Blocks />
            <Ghost />
            <Active />
        </Fragment>
    );
};
