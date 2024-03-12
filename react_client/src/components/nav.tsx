import * as React from "react";
import { FC } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsIcon } from "./misc";


export const TenshiNav: FC = () => {
    const navEl = <Navbar fixed='bottom' className="d-flex justify-content-around border-top">
        <NavLink to="/search" className="flex-grow-1 text-center">
            <BsIcon cls="radar" size={3}></BsIcon>
        </NavLink>
        <NavLink to="/users" className="flex-grow-1 text-center">
            <BsIcon cls="people-fill" size={3}></BsIcon>
        </NavLink>
        <NavLink to="/news" className="flex-grow-1 text-center">
            <BsIcon cls="newspaper" size={3}></BsIcon>
        </NavLink>
        <NavLink to="/events" className="flex-grow-1 text-center">
            <BsIcon cls="person-arms-up" size={3}></BsIcon>
        </NavLink>
    </Navbar>
    return navEl
}


