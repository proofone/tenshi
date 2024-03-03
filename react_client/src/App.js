import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

import { NewsFeed } from './components/mainfeed';
import { UserList, UserDetail } from './components/user';
import './scss/styles.scss';
import 'bootstrap-icons/font/bootstrap-icons.scss'


export let errorlog = []
export const debugInfoBox = document.querySelector("#debug-info")

const root = createRoot(document.getElementById('content'))

const router = createBrowserRouter([
    {
        path: "app/",
        element: <NewsFeed />,
        /*loader: async ({ params }) => {
            const response = await fetch(`${appOptions.apiurl_public}`);
            return await response.json();}*/
//        errorElement: <ErrorPage />,
    },
    {
        path: "app/news/",
        element: <NewsFeed />,
        // loader: async () => {
        //     const response = await fetch(`/api/users/`);
        //     return await response.json();}
//        errorElement: <ErrorPage />,
    },
    {
        path: "app/events/",
        element: <div>Event list...</div>,
        // loader: async () => {
        //     const response = await fetch(`/api/users/`);
        //     return await response.json();}
//        errorElement: <ErrorPage />,
    },
    {
        path: "app/events/:eventId",
        element: <div>Event details...</div>,
        // loader: async () => {
        //     const response = await fetch(`/api/users/`);
        //     return await response.json();}
//        errorElement: <ErrorPage />,
    },
    {
        path: "app/users/",
        element: <UserList />,
        // loader: async () => {
        //     const response = await fetch(`/api/users/`);
        //     return await response.json();}
//        errorElement: <ErrorPage />,
    },
    {
        path: "app/users/:userId",
        element: <UserDetail />,
        loader: ({ params }) => params
//        errorElement: <ErrorPage />,
    },
    {
        path: "app/communities/",
        element: <div>Communities list...</div>,
        // loader: async () => {
        //     const response = await fetch(`/api/users/`);
        //     return await response.json();}
//        errorElement: <ErrorPage />,
    },
    {
        path: "app/communities/:commId",
        element: <div>Community details...</div>,
        loader: ({ params }) => params
//        errorElement: <ErrorPage />,
    },
]);


root.render(<Provider store={store}><RouterProvider router={router}/></Provider>);

