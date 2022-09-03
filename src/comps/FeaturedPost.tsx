import { useNavigate } from 'react-router-dom';
import { Post } from '../defs/posts';
import { ITag } from '../defs/tag';
import { Tag } from './Tag';

export interface Props {
    post: Post;
}

/**
 * Featured Post
 */
export const FeaturedPost = (props: Props) => {
    const navigate = useNavigate();

    return (
        <div
            className="feat-post"
            onClick={() => navigate(`/post/${props.post.id}`)}
        >
            <div
                className="feat-post-img"
                style={{
                    backgroundImage: `url("${props.post.featured_image}")`,
                }}
            />

            <div className="feat-post-bot">
                <div className="feat-post-bot-right">
                    <h3>{props.post.title}</h3>
                    <p>{props.post.desc}</p>
                </div>
                <div className="multi-tag-con">
                    {props.post.tags?.map((t: ITag) => (
                        <Tag tag={t} />
                    ))}
                </div>
            </div>
        </div>
    );
};
