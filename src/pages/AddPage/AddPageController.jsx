import { useNavigate } from "react-router-dom";
import AddPageView from "./AddPageView";
import Model from "./AddPageModel";
import { v4 } from "uuid";
import { toast } from "react-toastify";

const AddPageController = () => {
  const navigate = useNavigate();

  // Works when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Take the inputs value
    const form = new FormData(e.target); // FormData Method is using with lots of inputs

    // create new Array
    const newPost = Object.fromEntries(form.entries());

    // Add id to post value
    newPost.id = v4();

    // Save the data to API
    Model.createPost(newPost)
      //Navigate to Home
      .then(() => {
        toast.success("Your post has been sent successfully")
        navigate("/")})
        // Catch
        .catch(() => {
          toast.error("An error occurred while sending the post.")
        })
  };

  return <AddPageView handleSubmit={handleSubmit} />;
};

export default AddPageController;
