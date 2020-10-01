import React, { useState, useEffect } from 'react';
import CardList from './components/card-list/CardList.component'
import Searchbar from './components/searchbar/Searchbar.components'

const App = () => {

  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(usersArray => setUsers(usersArray))
  }, [])

  const handleInputChange = (e) => {
    console.log(searchField)
    setSearchField(e.target.value)
  }

  const filteredMonsters = users.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  )

  return (
    <div>
      <Searchbar handleInputChange={handleInputChange} placeholder='Search for monsters' />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
