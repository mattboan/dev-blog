import '../css/edit-post.css';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    getPost,
    updatePost,
    uploadContentImage,
    uploadFeaturedImage,
} from '../api/post';
import { DotLoader } from 'react-spinners';
import { Post } from '../defs/posts';
import { Button } from '../comps/Button';

import ReactMarkdown from 'react-markdown';
import { ImageRenderer } from '../md-renderer/image-renderer';

/**
 * This component is for editing a post
 */
export const EditPost = (props: any) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [updateLoading, setUpdateLoading] = useState(false);
    const [post, setPost] = useState<Post>(null!);

    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    // Featured image
    const [featImage, setFeatImage] = useState<string>(null!);

    // List of content images to upload
    const [cursorPos, setCursorPos] = useState(0);
    const textareaRef = useRef<any>(null);
    const addImageToContentRef = useRef<any>(null!);

    // Upload a featured image
    const uploadFeatImage = (e: any) => {
        // Get the file
        const file = e.target.files[0];

        // Convert image to base64 string
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setFeatImage(reader.result as string);
        };

        //setFeatImage(e.target.files[0]);
    };

    // Load in a post
    const loadPost = async () => {
        if (!id) return;
        setLoading(true);

        try {
            const post = await getPost(id);
            setPost(post);
        } catch (err) {
            console.log('Failed to get the post: ', post);
        }

        setLoading(false);
    };

    // Update a post
    const update = async () => {
        if (!id || loading) return;

        setUpdateLoading(true);

        try {
            // Upload the post data
            const result = await updatePost(id, {
                title: newTitle,
                content: newContent,
            });

            // Upload the featured image
            if (featImage) await uploadFeaturedImage(+id, featImage);

            // Reload the post
            loadPost();
        } catch (err) {
            console.log('Failed to update', err);
        }

        setUpdateLoading(false);
    };

    // Add new image to the content
    const addImageToContent = async (e: any) => {
        if (!id) return;

        // Upload the content image
        const file = e.target.files[0];

        try {
            const result = await uploadContentImage(file);
            console.log('Uploaded image', result);
            console.log(
                'Got the textarea content: ',
                textareaRef.current.value
            );
            const old_content = newContent;
            const new_content =
                old_content.slice(0, cursorPos) +
                `![img](${result}) ` +
                old_content.slice(cursorPos);
            setNewContent(new_content);
        } catch (err) {
            console.log('Failed to upload image', err);
        }
    };

    // Watch the post object
    useEffect(() => {
        // Set the state title and content from the post if the p[ost is defined
        if (post) {
            setNewTitle(post.title);
            setNewContent(post.content);
            setFeatImage(post.featured_image);
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
                <input
                    value={newTitle}
                    onChange={(e: any) => setNewTitle(e.target.value)}
                />

                {/* Display Featured image */}
                {(post.featured_image || featImage) && (
                    <img
                        src={featImage || post.featured_image}
                        alt="Featured image"
                    />
                )}

                {/* Upload a featured image */}
                <input type="file" onChange={uploadFeatImage} />

                {/* Hidden image input */}
                <input
                    ref={addImageToContentRef}
                    type="file"
                    onChange={addImageToContent}
                    style={{ display: 'none' }}
                />
                <Button
                    onClick={() => {
                        addImageToContentRef &&
                            addImageToContentRef.current.click();
                    }}
                >
                    Add image
                </Button>

                <label>Content</label>
                <textarea
                    ref={textareaRef}
                    value={newContent}
                    onChange={(e: any) => setNewContent(e.target.value)}
                    onBlur={() =>
                        setCursorPos(textareaRef.current.selectionStart)
                    }
                />

                {updateLoading ? (
                    <p>Loading...</p>
                ) : (
                    <Button onClick={update}>Update</Button>
                )}
            </div>

            {/* Preview the post */}
            <div className="markdown-con">
                <ReactMarkdown components={{ img: ImageRenderer }}>
                    {newContent}
                </ReactMarkdown>
            </div>
        </div>
    );
};
