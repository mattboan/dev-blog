import axios from 'axios';
import { Post } from '../defs/posts';
import { base64ToImageFile } from '../utils/image';

// Create a post
export const createPost = async (create_post_data: any) => {
    const resp = await axios.post(
        `${process.env.REACT_APP_API}/post`,
        create_post_data
    );

    return resp.status === 201;
};

// Update a post
export const updatePost = async (id: string | number, data: Partial<Post>) => {
    const resp = await axios.patch(
        `${process.env.REACT_APP_API}/post/${id}`,
        data
    );
};

// Get a post
export const getPost = async (id: string) => {
    const resp = await axios.get(`${process.env.REACT_APP_API}/post/${id}`);

    return resp?.data;
};

// Get all the posts
export const getPosts = async () => {
    const resp = await axios.get(`${process.env.REACT_APP_API}/post/`);

    return resp?.data;
};

// Upload the featured image file
export const uploadFeaturedImage = async (id: number, file: File | string) => {
    // Convert base64 to file
    if (typeof file === 'string') {
        // Convert the base64 string to a file
        file = base64ToImageFile(file) as File; // Little hack as this might return null
        if (!file) return null;
    }

    // // Create multipart form data
    const formData = new FormData();
    formData.append('file', file);

    // Create the request headers
    const headers = {
        'Content-Type': 'multipart/form-data',
    };

    const resp = await axios.post(
        `${process.env.REACT_APP_API}/post/${id}/featured-image`,
        formData,
        { headers }
    );

    return resp?.data;
};

// Upload post content image
export const uploadContentImage = async (file: File) => {
    // Create a new form
    const formData = new FormData();
    formData.append('image', file);

    // Create the request headers
    const headers = {
        'Content-Type': 'multipart/form-data',
    };

    // Send the POST request
    const resp = await axios.post(
        `${process.env.REACT_APP_API}/post/content-image`,
        formData,
        { headers }
    );

    return resp?.data;
};
