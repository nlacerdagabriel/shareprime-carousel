import { MouseEventHandler } from "react";

export interface INextArrowProps {
    className: string;
    style: React.CSSProperties;
    onClick: MouseEventHandler<HTMLImageElement>;
}
