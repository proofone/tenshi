import * as React from "react";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { TenshiNav } from "./nav";


interface BsIProps {cls: string, size?: number}

export const BsIcon: FC<BsIProps> = ({cls, size}) => {
    const sizeStr = size ? ` fs-${size}`: "";

    return <i className={"bi bi-" + cls + sizeStr}></i>
}

export const TenshiRoot: FC = () => {
    
    return <>
        <Outlet /><TenshiNav />
    </>
}
