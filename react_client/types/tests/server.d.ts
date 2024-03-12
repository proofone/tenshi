export const db: import("@mswjs/data/lib/glossary").FactoryAPI<{
    user: {
        id: import("@mswjs/data/lib/primaryKey").PrimaryKey<string>;
        firstName: StringConstructor;
        lastName: StringConstructor;
        name: StringConstructor;
        username: StringConstructor;
        posts: import("@mswjs/data/lib/relations/Relation").ManyOf<"post">;
    };
    post: {
        id: import("@mswjs/data/lib/primaryKey").PrimaryKey<string>;
        title: StringConstructor;
        date: StringConstructor;
        content: StringConstructor;
        reactions: import("@mswjs/data/lib/relations/Relation").OneOf<"reaction">;
        comments: import("@mswjs/data/lib/relations/Relation").ManyOf<"comment">;
        user: import("@mswjs/data/lib/relations/Relation").OneOf<"user">;
    };
    comment: {
        id: import("@mswjs/data/lib/primaryKey").PrimaryKey<string>;
        date: StringConstructor;
        text: StringConstructor;
        post: import("@mswjs/data/lib/relations/Relation").OneOf<"post">;
    };
    reaction: {
        id: import("@mswjs/data/lib/primaryKey").PrimaryKey<string>;
        thumbsUp: NumberConstructor;
        hooray: NumberConstructor;
        heart: NumberConstructor;
        rocket: NumberConstructor;
        eyes: NumberConstructor;
        post: import("@mswjs/data/lib/relations/Relation").OneOf<"post">;
    };
}>;
export const handlers: import("msw/lib/core/handlers/HttpHandler").HttpHandler[];
export const worker: import("msw/browser").SetupWorker;
export function forceGenerateNotifications(since: any): void;
