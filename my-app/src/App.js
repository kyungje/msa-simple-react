import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = {
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name':'홍길동',
  'birthday':'820101',
  'gender':'남',
  'job':'프로'
}

function App() {
  return ( 
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
