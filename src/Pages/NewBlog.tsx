import { ChangeEvent, useState } from "react";
import Appbar from "../Components/Appbar";
import axios from "axios";
import { BackendUrl } from "../config/config";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
interface blogDataProps {
  title: string;
  content: string;
  createdAt: string;
}
function NewBlog(): JSX.Element {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [blogData, setBlogData] = useState<blogDataProps>({
    title: "",
    content: "",
    createdAt: "",
  });

  function publishBlog(e: any) {
    setError("");
    return new Promise((resolve, reject) => {
      if (!blogData.title) {
        setError("Title is required");
        return reject();
      }
      if (!blogData.content) {
        setError("Content is required");
        return reject();
      }
      e.preventDefault();
      const createdAt = new Date();
      blogData.createdAt = createdAt.toDateString();
      axios({
        method: "post",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        url: `${BackendUrl}/blog`,
        data: blogData,
      })
        .then((response) => {
          resolve("posting done");
          setTimeout(() => {
            navigate(`/blog/${response.data.id}`);
          }, 700);
        })
        .catch((err) => {
          setError(err.response.data.message);
          reject(err);
        });
    });
  }
  return (
    <div>
      <Appbar  />

      <div className="w-full flex flex-col gap-3 items-center p-2 md:p-4">
        <div className="w-full border-b md:p-3">
          <Toaster position="top-center" reverseOrder={false} />
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title"
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setBlogData({ ...blogData, title: e.target.value });
              }}
            />
          </div>
        </div>

        <form className="w-full">
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="content" className="sr-only">
                Your content
              </label>
              <textarea
                id="content"
                rows={16}
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400"
                placeholder="Tell your story..."
                required
                onChange={(e) => {
                  setBlogData({ ...blogData, content: e.target.value });
                }}
              />
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                onClick={(e) => {
                  toast.promise(
                    publishBlog(e),
                    {
                      loading: "Blog posting...",
                      success: <b className="text-green-600">Blog Posted</b>,
                      error: (
                        <b className="text-red-500">
                          Failed to Posting {error && <>{error}</>}
                        </b>
                      ),
                    },
                    {
                      duration: 3000,
                    }
                  );
                }}
                className="inline-flex items-center px-2  py-1 md:py-2.5 md:px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Post Blog
              </button>
              <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewBlog;
