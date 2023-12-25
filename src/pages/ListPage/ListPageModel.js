import axios from "axios";

export default class ListPageModel {
  static async getPosts() {
    const res = await axios.get("http://localhost:3089/posts");
    return res.data;
  }

  static async deletePost(postId) {
    const res = await axios.delete(`http://localhost:3089/posts/${postId}`);
    return res.data;
  }
}
