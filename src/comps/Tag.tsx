import "../css/tag.css";
import {ITag} from "../defs/tag";

export interface Props {
    tag: ITag;
};

/**
 * Tag component
 */
export const Tag = (props: Props) => {
    return <div className="tag-con" style={{borderColor: props.tag.color || "#fff"}}>
        <div className="tag-text">{props.tag.tag}</div>
    </div>  
};
