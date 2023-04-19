import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffectDataFetchingOne = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   getPosts();
  // }, []);

  // const getPosts = async () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //   console.log(response);
  //   setPosts(response.data);
  // };

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectDataFetchingOne;
