import * as React from "react";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { TenshiNav } from "./nav";


export const LoadingSpinner = ({minheight = '2rem'}: {minheight?: string;}) => {
    return <div className="d-flex justify-content-center my-3" style={{ minHeight: minheight }}>
        <div className="spinner-border" role="status"><span className="visually-hidden">loading...</span></div>
    </div>
}

interface BsIProps {cls: string, size?: number}
export const BsIcon = ({cls, size}: BsIProps) => {
    const sizeStr = size ? ` fs-${size}`: "";

    return <i className={"bi bi-" + cls + sizeStr}></i>
}

export const TenshiRoot: FC = () => {
    
    return <>
        <Outlet /><TenshiNav />
    </>
}
