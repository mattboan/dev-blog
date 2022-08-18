import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/post";
import { DotLoader } from "react-spinners";
import { Post } from "../defs/posts";
import { Editor } from "../comps/Editor";

/**
 * This component is for editing a post
 */
export const EditPost = (props: any) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<Post>(null!);

    // Load in a post
    const loadPost = async () => {
        if (!id) return;
        setLoading(true);

        try {
            const post = await getPost(id);
            setPost(post);
        } catch (err) {
            console.log("Failed to get the post: ", post);
        }

        setLoading(false);
    };

    useEffect(() => {
        loadPost();
    }, []);

    if (loading) return <DotLoader />;

    return (
        <div className="editor-wrapper">
            <h1>{post.title}</h1>

            {/* Editor  */}
            <Editor namespace="edit-project" />
        </div>
    );
};
