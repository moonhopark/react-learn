import React, { useState } from 'react';
import InsertDeleteUser from './InsertDeleteUser';

const InsertDelete = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ]);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onCreate = () => {
    const user = {
      username,
      email,
      id: users.length,
    };
    console.log(user);
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  const onRemoveUser = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };

  return (
    <div>
      <input value={username} onChange={onChangeUsername}></input>
      <input value={email} onChange={onChangeEmail} type="email"></input>
      <button onClick={onCreate}>사용자 추가</button>
      {users.map((user, index) => (
        <InsertDeleteUser user={user} key={index} onRemove={onRemoveUser} />
      ))}
    </div>
  );
};

export default InsertDelete;
