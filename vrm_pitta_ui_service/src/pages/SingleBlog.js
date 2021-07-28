import React from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
function SingleBlog() {
  const { id } = useParams();
  return (
    <>
      <DefaultLayout>
        <h3>I am {id} page</h3>
      </DefaultLayout>
    </>
  );
}

export default SingleBlog;
