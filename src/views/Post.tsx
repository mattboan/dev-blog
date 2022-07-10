import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "../defs/posts";

export interface Props {
  id: string;
}

/**
 * Post View
 */
export const PostView = (props: Props) => {
  const [post, setPost] = useState<Post>(null!);
  const [loading, setLoading] = useState(false);

  // Get the post of interest
  const getPost = async () => {
    setLoading(true);

    try {
      const temp = await axios.get(
        `${process.env.REACT_APP_API}/posts/${props.id}`
      );

      if (temp.status === 200) setPost(temp.data);
    } catch (err) {
      console.log("Failed to get the post.");
    }

    setLoading(false);
  };

  // Watch the props id
  useEffect(() => {
    if (props.id) getPost();
  }, [props.id]);

  // Check if the post is loading
  if (loading || !post) return <div className="loader-con">Loading...</div>;

  return (
    <div className="post-view">
      {/* Loading switch */}
      <h1>{post.title}</h1>
      <p>{post.desc}</p>
    </div>
  );
};
