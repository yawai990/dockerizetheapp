import { useQuery, useMutation } from "react-query";
import axios from "axios";

const fetchPostDetail = async (id: number) => {
  return axios.get(`http://localhost:3000/posts/${id}`);
};

export const usePostDetails = (id: number) => {
  return useQuery(["post-data", id], () => fetchPostDetail(id), {
    cacheTime: 10000,
  });
};
