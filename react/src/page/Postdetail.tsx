import React from "react";
import { useParams } from "react-router-dom";
import { usePostDetails } from "../hooks/PostData";

const Postdetail = () => {
  const { postid } = useParams();

  const { data, isError, isLoading, isFetching } = usePostDetails(
    Number(postid)
  );

  if (isLoading) {
    return <h5>Loading....</h5>;
  }
  if (isError) {
    return <h5>Error fetching is post detilas</h5>;
  }

  return (
    <article>
      {data?.data &&
        Object.keys(data.data).map((k: any) => {
          return <p key={k}>{data.data[k]}</p>;
        })}
    </article>
  );
};

export default Postdetail;
