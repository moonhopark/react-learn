import React from 'react';

const names = ['Kim', 'Lee', 'Park'];
const persons = [
  { id: 1, name: 'Kim', age: 21, skill: 'React' },
  { id: 2, name: 'Lee', age: 22, skill: 'Vue' },
  { id: 3, name: 'Park', age: 23, skill: 'Angular' },
];

const ListRender = () => {
  return (
    <div>
      {/* {names.map((name) => (
        <h2>{name}</h2>
      ))} */}
      {persons.map((person) => (
        <h2 key={person.id}>
          name : {person.name}, age : {person.age}, skill : {person.skill}
        </h2>
      ))}
    </div>
  );
};

export default ListRender;
