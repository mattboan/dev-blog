import {Post} from "../defs/posts"
import {ITag} from "../defs/tag";
import {Tag} from "./Tag";

export interface Props {
    post: Post;
}

/**
 * Featured Post
 */
export const FeaturedPost = (props: Props) => {
   
   console.log("Got the post: ", props.post);

    return <div className="feat-post">
        <div className="feat-post-img" style={{backgroundImage: `url("${props.post.thumb}")`}} />

        <div className="feat-post-bot">
            <h3>{ props.post.title }</h3>
            <p>{props.post.desc}</p>
            <div className="multi-tag-con">
                {props.post.tags?.map((t: ITag) => <Tag tag={t} />)}
            </div>
        </div>
    </div>
};
