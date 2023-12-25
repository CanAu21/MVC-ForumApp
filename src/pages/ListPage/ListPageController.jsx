import { useEffect, useState } from "react";
import ListPageView from "./ListPageView";
import Model from "./ListPageModel";

const ListPageController = () => {
  const [posts, setPosts] = useState(null);
  // Popup State
  const [isShowModel, setIsShowModel] = useState(false);

  useEffect(() => {
    Model.getPosts().then((data) => setPosts(data));
  }, []);

  // delete post
  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <ListPageView
      deletePost={deletePost}
      isShowModel={isShowModel}
      setIsShowModel={setIsShowModel}
      posts={posts}
    />
  );
};

export default ListPageController;
