import { ITag } from "./tag";

export interface Post {
    id: number;
    title: string;
    desc: string;
    thumb: string;
    threeThumb: string;
    content: string;
    tags: ITag[];
}
