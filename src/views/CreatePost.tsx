import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../api/post';
import { Button } from '../comps/Button';

// This component is for creatuing a new post
export const CreatePostView = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    // const [tags, setTags] = useState<string[]>([]);

    // This function calls the api to create a new post
    const create = async () => {
        setLoading(true);

        try {
            const created = await createPost({ title });

            navigate('');
        } catch (err) {
            console.log('Failed to create the post: ', err);
            alert('Failed to create the post.');
        }

        setLoading(false);
    };

    return (
        <div className="create-post-view">
            <h2>Create a new post</h2>

            <div className="create-post-form">
                <label>Title</label>
                <input
                    value={title}
                    onChange={(e: any) => setTitle(e.target.value)}
                />

                {/* <label>Tags</label> */}

                <Button onClick={create}>Create</Button>
            </div>
        </div>
    );
};
