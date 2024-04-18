import axios from "axios";
import { useEffect, useState } from "react";
import { BackendUrl } from "../config/config";

interface useGetBlog {
  id?: string;
}
interface blogFormat {
  id: number;
  title: string;
  content: string;
  userId: number;
  user: {
    username: string;
    name?: string;
    description: string;
  };
}

export function useGetBlog({ id }: useGetBlog) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [blog, setBlog] = useState<blogFormat>({
    id: -1,
    title: "",
    content: "",
    userId: 0,
    user: {
      username: "",
      name: "",
      description: "",
    },
  });

  useEffect(() => {

    axios({
      method: "get",
      url: `${BackendUrl}/blog/getBlog/${id}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => setBlog(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);


  return { loading, error, blog };
}
