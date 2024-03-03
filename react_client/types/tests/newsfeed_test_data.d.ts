export const posts: ({
    key: number;
    author: number;
    title: string;
    text: string;
} | {
    key: number;
    author: number;
    title: null;
    text: string;
})[];
