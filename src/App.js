import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {

  const [users, setusers] = useState([])
  const [userSelected, setuserSelected] = useState(null)
  useEffect(() => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setusers(res.data))
  }, [])

  const getusers = () => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setusers(res.data))
  }

  const selectUser = user => setuserSelected(user)

  const deselectUser = () => setuserSelected(null)

  const removeuser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getusers())
  }
  
  const [showForm, setshowForm] = useState(false)

  return (
    <div className="App">
      <h1>Usuarios</h1>
      <button className='form-buttom' onClick={() => setshowForm(true)}>+ Crear nuevo usuario</button>
      {showForm && <UsersForm close={() => setshowForm(false)} getusers={getusers} userSelected={userSelected} deselectUser={deselectUser}/>}
      <UsersList open={() => setshowForm(true)} users={users} selectUser={selectUser} removeuser={removeuser}/>
    </div>
  );
}

export default App;
