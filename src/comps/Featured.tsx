import axios from 'axios';
import { useEffect, useState } from 'react';
import { getPosts } from '../api/post';
import '../css/featured.css';
import { Post } from '../defs/posts';
import { useWindowSize } from '../hooks/WindowSize';
import { FeaturedPost } from './FeaturedPost';

// Featured component
export const Featured = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    // Get the featured posts
    const get = async () => {
        setLoading(true);

        try {
            const posts = await getPosts();
            setPosts(posts);
        } catch (err) {
            console.log('Failed to get the featured posts: ', err);
        }

        setLoading(false);
    };

    // When this component mounts get the featured posts
    useEffect(() => {
        get();
    }, []);

    return (
        <div className="feat-con">
            <h2>Featured</h2>

            <div className="coral-wrapper">
                {posts?.map((p: Post) => (
                    <FeaturedPost post={p} />
                ))}
            </div>
        </div>
    );
};
