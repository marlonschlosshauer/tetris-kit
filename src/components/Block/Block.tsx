import { FC } from "react";
import { Cell } from "@/components/Cell/Cell";
import { Frame } from "@/components/Frame/Frame";
import { useVisual } from "@/provider/visual";
import { PropsWithClassName } from "@/types/app";
import { Cell as Cell_ } from "@/types/game";

export type BlockProps = Cell_;

export const Block: FC<PropsWithClassName<BlockProps>> = props => {
    const { classNames } = useVisual();

    const classes =
        typeof classNames.cell === "string"
            ? { className: classNames.cell }
            : { classNames: classNames.cell };

    return (
        <Frame {...props}>
            <Cell {...props} {...classes} />
        </Frame>
    );
};
