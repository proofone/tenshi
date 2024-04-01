import React from "react";
import {FC, useState} from "react";
import {Link, useLoaderData} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { usersState } from "../redux/usersSlice";
import { BsIcon, LoadingSpinner } from "./misc";
import { useGetUsersQuery, useGetUserByIdQuery } from "../redux/api";


interface UserDetailProps {userId: string}

export const UserListItem = () => {

}

export const UserList = () => {
    const usersData = useAppSelector(state => state.users.users)
    const dispatch = useAppDispatch()
    const { data, error, isLoading } = useGetUsersQuery('')

    error && console.warn(error.toString())

    return <div>
        <div>Users:</div>
        {isLoading
            ? <LoadingSpinner />
            : usersData 
                ? usersData.map((u, i) => {
                    return <Link to={String(u.pk)}><div key={i}><BsIcon {...{cls: "person"}}/>{u.fields.username}</div></Link>
                })
                : error ? <div>error getting user list</div> : null}
    </div>
}

export const UserDetail = () => {
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
