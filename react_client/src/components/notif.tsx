import * as React from "react";
import { FC } from "react";
import { Toast } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsIcon } from "./misc";


export const NotifToast: FC = (text: string) => {
    const notifEl = <Toast>{ text }</Toast>
    return notifEl
}


