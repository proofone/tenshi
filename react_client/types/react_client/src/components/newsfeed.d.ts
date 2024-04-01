import React from "react";
import { Post } from "../../../node_server/models/messages";
export declare const NewsFeedPostForm: () => React.JSX.Element[];
export declare const FeedItem: ({ body, author_id, created_date }: Post) => React.JSX.Element;
export declare const NewsFeed: (posts: Post[]) => void;
