import * as React from "react";
import {FC, useState} from "react";
import {Link, useLoaderData} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import type { Conversation, Message } from "../../../node_server/models/messages";


export const ConversationList: FC = () => {
    const chatsData = useAppSelector(state => state.users.users)
    const dispatch = useAppDispatch()
    //const fetchedUsers: usersState = useLoaderData() as usersState // TODO: with redux?

    return <div>
        <div>Chats:</div>
        {chatsData.map((u, i) => {
            return <Link to={String(u.pk)}><div key={i}>{u.fields.username}</div></Link>
        })}
    </div>
}
