import React, { MouseEventHandler } from "react";

export interface IPrimaryButtonProps {
    children: React.ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>
  
}