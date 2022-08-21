import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { getPost } from "../api/post";
import { Post } from "../defs/posts";

export const ViewPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post>(null!);
    const [loading, setLoading] = useState(true);

    // Load the post
    const load = async () => {
        setLoading(true);

        if (!id) return;

        try {
            setPost(await getPost(id));
        } catch (err) {
            console.log("Failed to load ");
        }

        setLoading(false);
    };

    // Load the post once we get the id
    useEffect(() => {
        load();
    }, [id]);

    if (!id)
        return (
            <div className="view-post-con">
                <DotLoader />
            </div>
        );
    else
        return (
            <div className="view-post-con">
                <h2>{post?.title}</h2>
                <ReactMarkdown>{post?.content}</ReactMarkdown>
            </div>
        );
};
