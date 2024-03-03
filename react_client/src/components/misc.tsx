import * as React from "react";
import {FC} from "react";


interface BsIProps {cls: string, size?: number}
export const BsIcon: FC<BsIProps> = ({cls, size}) => {
    const styleStr = size ? {'font-size': `${size}rem`} : {};
    return <i className={"bi bi-" + cls}></i>
}
