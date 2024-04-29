import axios from "axios";
import { useEffect, useState } from "react";
import { BackendUrl } from "../config/config";
interface useBlogPorps {
  page?: number;
  limit?: number;
}

export function useBlog({ page = 1, limit = 100 }: useBlogPorps) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      url: `${BackendUrl}/blog/get/bulk?page=${page}&limit=${limit}`,
    })
      .then((response) => setBlogs(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page, limit]);

  return { loading, blogs, error };
}
