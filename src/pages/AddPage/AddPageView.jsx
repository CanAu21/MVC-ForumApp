const AddPageView = ({ handleSubmit }) => {
  return (
    <div className="h-90vh] grid place-items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-3/4 max-w-[1000px] mt-7 bg-black p-4 rounded-lg">
        <h1 className="text-center text-xl ">Create a New Post</h1>

        <div className="flex flex-col gap-1">
          <label className="block mb-2 text-sm font-medium  dark:text-white">
            Username
          </label>
          <input
            name="user"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Can"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="block mb-2 text-sm font-medium  dark:text-white">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="What is React??"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="block mb-2 text-sm font-medium  dark:text-white">
            Contents
          </label>
          <textarea
            name="text"
            type="text"
            className="min-h-[150px] max-h-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 p-2 rounded-lg transition hover:bg-yellow-600"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPageView;
