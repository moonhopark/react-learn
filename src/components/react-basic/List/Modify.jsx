import React, { useState } from 'react';

const Modify = () => {
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

  const onModifyUser = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => (user.id === userId ? { id: userId, username, email } : user));
    });
  };

  return (
    <div>
      <input onChange={onChangeUsername}></input>
      <input onChange={onChangeEmail}></input>
      {users.map((user, index) => (
        <User user={user} key={index} onModify={onModifyUser} />
      ))}
    </div>
  );
};

export default Modify;

const User = ({ user, onModify }) => {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email}) </span>
      <button onClick={() => onModify(user.id)}>수정</button>
    </div>
  );
};
