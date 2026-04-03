import { FC, Fragment, PropsWithChildren } from "react";

export const ActiveWrapper: FC<PropsWithChildren> = ({ children }) => {
    return <Fragment>{children}</Fragment>;
};
