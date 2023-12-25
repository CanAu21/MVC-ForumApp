const PopupView = ({ posts, isShowModel, setIsShowModel }) => {
  return (
    <div className="grid place-items-center w-full h-full fixed bg-black bg-opacity-50 inset-0">
      <div className="w-3/4 max-w-[600px] bg-gray-800 p-5 rounded-md">
        <div className="flex justify-between">
          <h4>
            Posts of{" "}
            <span className="font-bold text-yellow-500">{isShowModel}</span>{" "}
          </h4>
          <button
            onClick={() => setIsShowModel(false)}
            className="bg-gray-900 w-10 p-2 rounded-md shadow-sm transition hover:shadow-yellow-500"
          >
            X
          </button>
        </div>

        {!posts ? (
          <p>Loading..</p>
        ) : (
          posts.map((post) => (
            <div className="bg-black p-3 rounded-md my-4">
              <h2 className="font-bold my-1">{post.title}</h2>
              <p>{post.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopupView;
