import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/small-post-item.css";
import { Post } from "../defs/posts";
import { ITag } from "../defs/tag";
import { Tag } from "./Tag";

const DEF_DESC_LIMIT = 40;

export interface Props {
    post: Post;
    desc_limit?: number;
}

/** Smaller version of the featured post */
export const SmallPostItem = (props: Props) => {
    const navigate = useNavigate();
    const [desc_limit, setDescLimit] = useState(DEF_DESC_LIMIT);

    useEffect(() => {
        if (props.desc_limit) setDescLimit(props.desc_limit);
    }, [props.desc_limit]);

    return (
        <div className="small-post-item" onClick={() => navigate(`/post/${props.post.id}`)}>
            <div
                className="small-post-item-img-con"
                style={{
                    backgroundImage: `url("${props.post.thumb}")`,
                }}
            />

            <div className="small-post-item-right-con">
                <div className="small-post-item-right-con-text">
                    <h3>{props.post.title}</h3>
                    <p>
                        {props.post.desc.length > desc_limit
                            ? `${props.post.desc.substring(0, desc_limit)}...`
                            : props.post.desc}
                    </p>
                </div>
                <div className="small-post-multi-tag-con">
                    {props.post.tags?.map((t: ITag) => (
                        <Tag tag={t} />
                    ))}
                </div>
            </div>
        </div>
    );
};
