import React, { useEffect, useState } from "react";
import axios from "axios";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const refetch = async () => {
    try {
      const { data } = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          return res;
        });

      setPosts(data);
      setError();
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return { posts, isLoading, error, refetch };
}
