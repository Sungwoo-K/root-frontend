import { createContext, useState, useContext } from 'react';

export interface Post {
    title: string;
    content: string;
    files: LocalFile[];
}

interface LocalFile {
    type: string;
    src: string
}

const PostContext = createContext<{
    posts: Post[];
    addPost: (post: Post) => void;
} | undefined>(undefined);

export function PostProvider({ children }) {
    const [posts, setPosts] = useState<Post[]>([]);

    const addPost = (post: Post) => {
        setPosts(prevPosts => [...prevPosts, post]);
    };

    return (
        <PostContext.Provider value={{ posts, addPost }}>
            {children}
        </PostContext.Provider>
    );
}

export const usePosts = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error("usePosts must be used within a PostProvider");
    }
    return context;
}
