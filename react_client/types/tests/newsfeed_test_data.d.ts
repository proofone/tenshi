export const posts: ({
    key: number;
    author_id: number;
    title: string;
    text: string;
} | {
    key: number;
    author_id: number;
    title: null;
    text: string;
})[];
