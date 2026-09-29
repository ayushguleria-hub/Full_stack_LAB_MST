import { useState } from "react";

function PostBox() {
  const [post, setPost] = useState("");

  const handleChange = (event) => {
    setPost(event.target.value);
  };

  const handlePost = () => {
    alert("Post submitted: " + post);
    setPost("");
  };

  const isOverLimit = post.length > 100;
  const isEmpty = post.trim().length === 0;

  return (
    <div className="post-box">
      <h2>Create a Post</h2>

      <textarea
        value={post}
        onChange={handleChange}
        placeholder="Write your post..."
      />

      <p className={isOverLimit ? "counter error" : "counter"}>
        {post.length} / 100
      </p>

      {isOverLimit && (
        <p className="limit-message">Word limit exceeded</p>
      )}

      <button
        onClick={handlePost}
        disabled={isEmpty || isOverLimit}
      >
        Post
      </button>
    </div>
  );
}

export default PostBox;