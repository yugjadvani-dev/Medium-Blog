import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const FetchUseQuery: React.FC = () => {
  const fetchTodos = (): Promise<Todo[]> =>
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.data);

  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) return <p>Loading...</p>;
  if (axios.isAxiosError(error)) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data && data.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};

export default FetchUseQuery;
