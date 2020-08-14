import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_TASK } from "../utils/gql";
import Content from "../components/Content";
function Home() {
  const { loading, error, data: { getTasks } = {} } = useQuery(GET_ALL_TASK);

  if (loading) return <p>page is loading</p>;
  if (error) return <p>Error!!!</p>;
  return (
    <div>
      <Content tasks={getTasks} />
    </div>
  );
}

export default Home;
