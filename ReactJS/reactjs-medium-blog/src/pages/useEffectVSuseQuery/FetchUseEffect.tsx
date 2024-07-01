import React, { useState, useEffect } from "react";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface ErrorResponse {
  message: string;
}

const FetchUseEffect: React.FC = () => {
  const [data, setData] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorResponse | null>(null);

  useEffect(() => {
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err: ErrorResponse) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default FetchUseEffect;
