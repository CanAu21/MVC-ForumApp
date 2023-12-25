import { useEffect } from "react";
import PopupView from "./PopupView";
import Model from "./PopupModel";
import { useState } from "react";

const PopupController = ({ isShowModel, setIsShowModel }) => {
  const [posts, setPosts] = useState(null);

  // get user information when open popup
  useEffect(() => {
    Model.getUserPosts(isShowModel).then((data) => setPosts(data));
  }, []);

  return (
    <PopupView
      posts={posts}
      isShowModel={isShowModel}
      setIsShowModel={setIsShowModel}
    />
  );
};

export default PopupController;
