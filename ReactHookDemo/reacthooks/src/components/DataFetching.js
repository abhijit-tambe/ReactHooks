import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setData(res.data);
      });
    console.log(data);
  }, [id]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <ul>
        {posts.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
      <div>hi:{data.name}</div>
    </div>
  );
}

export default DataFetching;
