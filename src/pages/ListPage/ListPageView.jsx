import PopupController from "../../components/PopUp/PopupController";
import { MdDeleteForever } from "react-icons/md";

const ListPageView = ({ deletePost ,posts, isShowModel, setIsShowModel }) => {
  return (
    <main className="container-sm px-5 py-5  md:px-40  lg:px-52">
      <h1>
        Number of Posts:
        <span className="font-bold mx-1">{posts?.length}</span>
      </h1>

      {!posts ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div
            className="bg-black my-5 p-5 rounded-md shadow shadow-[#ffffff38] hover:shadow-yellow-300 cursor-pointer"
            key={posts.id}
          >
            <div className="flex justify-between">
              <h3>{post.title}</h3>
              <p
                onClick={() => setIsShowModel(post.user)}
                className="text-yellow-500"
              >
                {post.user}
              </p>
            </div>

            <div className="flex justify-between mt-4 text-slate-300">
              {post.text}
              <button onClick={() => deletePost(post.id)}  className="text-2xl shadow-md hover:shadow-yellow-500">
                <MdDeleteForever />
              </button>
            </div>
          </div>
        ))
      )}

      {isShowModel && (
        <PopupController
          isShowModel={isShowModel}
          setIsShowModel={setIsShowModel}
        />
      )}
    </main>
  );
};

export default ListPageView;
