import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import axios from "axios";

const fetchPost = async () => {
  const resp = await fetch("http://localhost:3000/posts");
  const data = await resp.json();

  return data;
};

const Post = () => {
  const { data, isError, isLoading, isFetching, refetch } = useQuery(
    ["post_data"],
    fetchPost,
    {
      cacheTime: 2000,
      //enabled: false, // means the query will not run when component is mount
      staleTime: 1000, //the query will refetch after 10 seconda when it mounts:
      // refetchOnMount: false,
      // refetchOnWindowFocus: "always",
      //refetchInterval: 5000, //every 5 second, the data will refetch //should be use only in real time app
    }
  );

  const addNewPost = (data: any) => {
    return axios.post(`http://localhost:3000/posts`, data).then((resp) => resp);
  };

  const { mutate } = useMutation(addNewPost, {
    onSuccess: () => console.log("success"),
    onError: () => console.log("post creating failid"),
  });

  if (isError) {
    return <h1>Error fetching</h1>;
  }
  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const elements = e.currentTarget;
    const title = elements.title.value;
    const body = elements.body.value;
    const newData = { title, body, userId: Date.now(), id: Date.now() };

    mutate(newData);
    refetch();
    // await axios
    //   .post("http://localhost:3000/posts", newData)
    //   .then((resp) => console.log(resp))
    //   .catch((err) => console.log(err));
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>

        <div>
          <label htmlFor="body">body</label>
          <textarea name="body" id="body" cols={30} rows={10}></textarea>
        </div>
        <button type="submit">Post</button>
      </form>
      <h4>Posts</h4>

      {/* <button onClick={refetch}>fetch the post</button> */}

      {data?.map((d: any) => (
        <div key={d.id}>
          <h6>{d.title}</h6>
          <p>{d.body}</p>

          <Link to={`/post/${d.id}`}>view detials</Link>
        </div>
      ))}
    </main>
  );
};

export default Post;
