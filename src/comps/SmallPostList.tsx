import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "../defs/posts";
import { DotLoader } from "react-spinners";
import { SmallPostItem } from "./SmallPostItem";

export interface Props {
    title?: string;
}

/** Small Featured Post list */
export const SmallPostList = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    // Get the posts
    const get = async () => {
        setLoading(true);
        try {
            const resp = await axios.get(`${process.env.REACT_APP_API}/posts`);

            // Check the status
            if (resp.status === 200) {
                setPosts(resp.data);
            }
        } catch (err) {
            console.log("Failed to get the posts: ", err);
        }
        setLoading(false);
    };

    // When the comp loads
    useEffect(() => {
        get();
    }, []);

    // Render the comp
    return (
        <div className="small-post-item-list-con">
            <h2>{props.title || "Posts"}</h2>
            {loading ? (
                <DotLoader />
            ) : (
                <div className="small-post-item-list">
                    {posts?.map((p: Post) => (
                        <SmallPostItem post={p} />
                    ))}
                </div>
            )}
        </div>
    );
};
