import '../css/view-post.css';
import '../css/rehype-atom-one-dark.css';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import { getPost } from '../api/post';
import { Post } from '../defs/posts';
import { ImageRenderer } from '../md-renderer/image-renderer';
import rehypeHighlight from 'rehype-highlight';
import rehypeFilter from 'react-markdown/lib/rehype-filter';

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
            console.log('Failed to load ');
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
                <div
                    className="feat-post-img"
                    style={{
                        backgroundImage: `url("${post?.featured_image}")`,
                    }}
                >
                    <div className="view-post-outer-header">
                        <div className="view-post-header">
                            <h2>{post?.title}</h2>
                            <div>{post?.desc}</div>
                        </div>
                    </div>
                </div>
                <div className="view-post-content">
                    <ReactMarkdown
                        components={{ img: ImageRenderer }}
                        rehypePlugins={[rehypeFilter, rehypeHighlight]}
                    >
                        {post?.content}
                    </ReactMarkdown>
                </div>
            </div>
        );
};
