import React from 'react';

const InsertDeleteUser = ({ user, onRemove }) => {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email}) </span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

export default InsertDeleteUser;
