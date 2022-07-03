import {Post} from "../defs/posts";
import {ITag} from "../defs/tag";
import {Tag} from "./Tag";

export interface Props {
    post: Post;
}

/** Smaller version of the featured post */
export const SmallPostItem = (props: Props) => {

    return <div className="small-post-item">
        <div className="small-post-item-img-con" style={{
            backgroundImage: `url("${props.post.thumb}")`
        }}/>

        <div className="small-post-item-right-con">
            <div className="small-post-item-right-con-text">
                <h4>{props.post.title}</h4>
                <p>{props.post.desc}</p>
            </div>
            <div className="multi-tag-con">
                {props.post.tags?.map((t: ITag) => <Tag tag={t} />)}
            </div>
        </div>
    </div>
};
