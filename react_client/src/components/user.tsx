import * as React from "react";
import {FC, useState} from "react";
import {Link, useLoaderData} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { usersState } from "../redux/usersSlice";
import { BsIcon } from "./misc";
import { useGetUsersQuery, useGetUserByIdQuery } from "../redux/api";


interface UserDetailProps {userId: string}

export const UserList: FC = () => {
    const usersData = useAppSelector(state => state.users.users)
    const dispatch = useAppDispatch()
    //const fetchedUsers: usersState = useLoaderData() as usersState // TODO: with redux?
    const { data, error, isLoading } = useGetUsersQuery('')

    return <div>
        <div>Users:</div>
        {isLoading
            ? <span>Loading...</span>
            : usersData 
                ? usersData.map((u, i) => {
                    return <Link to={String(u.pk)}><div key={i}><BsIcon {...{cls: "person"}}/>{u.fields.username}</div></Link>
                })
                : error ? <div>error getting user list</div> : null}
    </div>
}

export const UserDetail: FC = () => {
    const usersData = useAppSelector(state => state.users.users)
    const dispatch = useAppDispatch()
    const urlParams = useLoaderData() as UserDetailProps
    const userData = usersData.find(u => u.pk === Number.parseInt(urlParams.userId))

    return <div>
        {userData!
            ? <h3>{userData.fields.username}:</h3>
            : <div>User not found</div>}
    </div>
}
