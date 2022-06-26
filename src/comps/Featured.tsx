import axios from "axios";
import {useEffect, useState} from "react";
import "../css/featured.css"
import {Post} from "../defs/posts";
import {FeaturedPost} from "./FeaturedPost";

// Featured component
export const Featured = () => {
    const [ posts, setPosts] = useState<Post[]>([]);

    // Get the featured posts
    const get = async () => {
        try {
            const resp = await axios.get(`${process.env.REACT_APP_API}/posts`);

            if (resp.status === 200) {
                setPosts(resp.data);
            }

        } catch (err) {
            console.log("Failed to get the featured posts.");
        }
    };

    // When this component mounts get the featured posts
    useEffect(() => {
        get();
    }, []);

    return <div className="feat-con">
        <h2>Featured</h2>

        <div className="coral-wrapper">
           {posts?.map((p: Post) => <FeaturedPost post={p} />)} 
        </div>
    </div>
};
