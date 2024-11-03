import { PostApi } from "@/types";
import { useState } from "react";

export function useFetchData() {
  const [results, setResults] = useState<PostApi[]>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function getPost() {
    setLoading(true);
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(async (res) => {
        setResults(await res.json());
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setLoading(false);
        setResults((prev) => prev?.slice(0, 6));
      });
  }
  return { results, isLoading, error, getPost };
}
