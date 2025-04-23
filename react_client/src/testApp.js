import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'

import { TenshiRoot } from './components/misc';
// import { NewsFeed } from './components/newsfeed';
// import { UserList, UserDetail } from './components/user';
// import { SearchElement } from './components/search';

import './scss/styles.scss';
import 'bootstrap-icons/font/bootstrap-icons.scss'


const root = createRoot(document.getElementById('content'))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <TenshiRoot />,
        /*loader: async ({ params }) => {
            const response = await fetch(`${appOptions.apiurl_public}`);
            return await response.json();}*/
/*        errorElement: <ErrorPage />,
        children: [

            {
                path: "search/",
                element: <SearchElement />,
                // loader: async () => {
                //     const response = await fetch(`/api/users/`);
                //     return await response.json();}
        //        errorElement: <ErrorPage />,
            },
            {
                path: "news/",
                element: <NewsFeed />,
                // loader: async () => {
                //     const response = await fetch(`/api/users/`);
                //     return await response.json();}
        //        errorElement: <ErrorPage />,
            },
            {
                path: "events/",
                element: <div>Event list...</div>,
                // loader: async () => {
                //     const response = await fetch(`/api/users/`);
                //     return await response.json();}
        //        errorElement: <ErrorPage />,
            },
            {
                path: "events/:eventId",
                element: <div>Event details...</div>,
                // loader: async () => {
                //     const response = await fetch(`/api/users/`);
                //     return await response.json();}
        //        errorElement: <ErrorPage />,
            },
            {
                path: "users/",
                element: <UserList />,
                // loader: async () => {
                //     const response = await fetch(`/api/users/`);
                //     return await response.json();}
        //        errorElement: <ErrorPage />,
            },
            {
                path: "users/:userId",
                element: <UserDetail />,
                loader: ({ params }) => params
        //        errorElement: <ErrorPage />,
            },
            {
                path: "communities/",
                element: <div>Communities list...</div>,
                // loader: async () => {
                //     const response = await fetch(`/api/users/`);
                //     return await response.json();}
        //        errorElement: <ErrorPage />,
            },
            {
                path: "communities/:commId",
                element: <div>Community details...</div>,
                loader: ({ params }) => params
        //        errorElement: <ErrorPage />,
            },
        ]*/
    },
], {
    basename: "/app",
});


root.render(<Provider store={store}><RouterProvider router={router}/></Provider>);

