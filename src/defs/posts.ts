import {ITag} from "./tag";

export interface Post {
    title: string;
    desc: string;
    thumb: string;
    threeThumb: string;
    tags: ITag[];
}
