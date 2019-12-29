import React from 'react';
import './App.css';
import UserCard from './Components/UserCard';
import FollowerCard from './Components/FollowerCard';

function App () {
  

 
return (
    <div className="App">          
      <h1>App Here</h1>
      <div className = 'Main-User'>
        <UserCard />
      </div> 
      <div className = "Followers">
        <FollowerCard />
      </div>         
    </div>
  );
}
 
  

export default App;
