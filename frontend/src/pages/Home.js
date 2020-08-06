import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_TASK } from "../utils/gql";
import { Layout } from "antd";
import Todolist from "../components/Todolist";

function Home() {
  const { Content } = Layout;
  const { loading, error, data: { getTasks } = {} } = useQuery(GET_ALL_TASK);

  if (loading) return <p>page is loading</p>;
  if (error) return <p>Error!!!</p>;

  return (
    <Layout>
      <Content style={{ margin: "auto" }}>
        <Todolist tasks={getTasks} />
      </Content>
    </Layout>
  );
}

export default Home;
