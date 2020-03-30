import React from 'react';
import './Person.css';

const Person = () => {
    return (
        <div className='card'>
        <p>Hello, my name is {props.name} and I am {props.age} Years old</p>
        </div>
    )
};
export default Person;