import '../css/search-posts.css';
import '../css/search-posts-box.css';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Post } from '../defs/posts';
import { getPosts } from '../api/post';

// This view is for searching for a post
export const SerchPostView = () => {
    const [searching, setSearching] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);

    // This function searches posts
    const query = async (query: string) => {
        // Check that the search text is set
        if (!query || query.length < 1) return;

        setSearching(true);

        try {
            const results = await getPosts();
            setPosts(results);
        } catch (err) {
            console.log('Failed to load the posts.', err);
        }

        setSearching(false);
    };

    return (
        <div className="search-post-view">
            <h2>Posts</h2>

            <PostSearchBox searching={searching} search={query} />

            {searching ? (
                <></>
            ) : (
                <>
                    {posts.length > 0 ? (
                        <>
                            <p>Posts...</p>
                        </>
                    ) : (
                        <>
                            <p>No posts found.</p>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export interface PostSearchBoxProps {
    searching: boolean;
    search: (query: string) => void;
}

export const PostSearchBox = (props: PostSearchBoxProps) => {
    const [search_txt, setSearchTxt] = useState('');

    return (
        <div className="post-search-con">
            <div className="post-search-inner-con">
                <input
                    value={search_txt}
                    onChange={(e: any) => setSearchTxt(e.target.value)}
                />

                <button
                    onClick={() => props.search(search_txt)}
                    className="search-btn"
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
};
