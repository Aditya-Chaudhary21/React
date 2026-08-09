import React ,{useState} from 'react'
import Login from './components/Login'
import Register from './components/Register'
import UserCard from './components/UserCard';

const App = () => {
  let [users, setUsers] = useState([]);
  return (
    <div className="bg-white flex flex-wrap  ">
    
    <Register className="flex h-20px w-30px flex-wrap overflow-y-hidden items-left justify-left" setUsers={setUsers} users={users} />
    <div>
     {
     users.map((elem)=>{
      return <UserCard user={elem} key={elem.email}/>}) }
    </div>
    </div>
  )
}

export default App
