import axios from "axios";

// Create a post
export const createPost = async () => {};

// Update a post
export const updatePost = async (id: string) => {};

// Get a post
export const getPost = async (id: string) => {
    const resp = await axios.get(`${process.env.REACT_APP_API}/posts/${id}`);

    return resp?.data;
};
