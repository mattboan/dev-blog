import "../css/edit-post.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/post";
import { DotLoader } from "react-spinners";
import { Post } from "../defs/posts";
import { Button } from "../comps/Button"

import ReactMarkdown from "react-markdown";
import {ImageRenderer} from "../md-renderer/image-renderer";

/**
 * This component is for editing a post
 */
export const EditPost = (props: any) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [updateLoading, setUpdateLoading] = useState(false);
    const [post, setPost] = useState<Post>(null!);

    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

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

    // Update a post
    const updatePost = async () => {
        if (!id || loading) return;

        setUpdateLoading(true);

        try {
            
        } catch (err) {
            console.log("Failed to update");
        }

        setUpdateLoading(false);
    };

    // Watch the post object
    useEffect(() => {
        // Set the state title and content from the post if the p[ost is defined
        if (post) {
            setNewTitle(post.title);
            setNewContent(post.content);
        }
    }, [post]);

    useEffect(() => {
        loadPost();
    }, []);

    if (loading) return <DotLoader />;

    return (
        <div className="editor-wrapper">
            <div className="post-form">
            <label>Title</label>
            <input value={newTitle} onChange={(e: any) => setNewTitle(e.target.value)} />

            <label>Content</label>
            <textarea value={newContent} onChange={(e: any) => setNewContent(e.target.value)} />
    
            { updateLoading ? <p>Loading...</p> : <Button onClick={updatePost}>Update</Button>}
</div>

        <div className="markdown-con">
           <ReactMarkdown components={{img: ImageRenderer}}>
            {newContent}
            </ReactMarkdown>
        </div>

        </div>
    );
};
