import { FC, Fragment } from "react";
import { Block } from "@/components/Block/Block";
import { projectGhost } from "@/lib/projection";
import { useTetris } from "@/provider/tetris";

export const Ghost: FC = () => {
    const { active, playground, cells } = useTetris();

    if (!active || !playground) {
        return null;
    }

    const map = projectGhost(active, playground, cells);

    return (
        <Fragment>
            {map.flatMap(row =>
                row.flatMap(
                    cell =>
                        cell.status === "ghost" && <Block key={`${cell.x}-${cell.y}`} {...cell} />
                )
            )}
        </Fragment>
    );
};
