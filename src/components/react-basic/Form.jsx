import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [comments, setComments] = useState('');
  const [topic, setTopic] = useState('react');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`${username} ${comments} ${topic}`);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Comments</label>
        <textarea value={comments} onChange={handleCommentsChange} />
      </div>
      <div>
        <label>Topic</label>
        <select value={topic} onChange={handleTopicChange}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
