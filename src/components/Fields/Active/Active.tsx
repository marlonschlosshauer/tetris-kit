import { FC, Fragment } from "react";
import { Block } from "@/components/Block/Block";
import { projectActive } from "@/lib/projection";
import { useTetris } from "@/provider/tetris";

export const Active: FC = () => {
    const { active, playground } = useTetris();

    if (!active || !playground) {
        return null;
    }

    const map = projectActive(active, playground);

    return (
        <Fragment>
            {map.flatMap(row =>
                row.flatMap(cell => <Block key={`${cell.x}-${cell.y}`} {...cell} />)
            )}
        </Fragment>
    );
};
