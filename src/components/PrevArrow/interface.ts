import React, { MouseEventHandler } from "react";

export interface IPrevArrowProps {
  className: string;
  style: React.CSSProperties;
  onClick: MouseEventHandler<HTMLImageElement>;
}
