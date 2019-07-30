import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'normalize.css/normalize.css'
import '../styles/App.css'





export default props => {
  const [profile, setProfile] = useState({})
  const [repos, setRepos] = useState([])
 useEffect(() =>{
  axios.get("https://api.github.com/users/MonetCarriere").then(resp => {
    setProfile(resp.data)
  }) 
  axios.get("https://api.github.com/users/MonetCarriere/repos").then(resp => {
   setRepos(resp.data)
  })
 }, [])
 return (
   <>
    <img src={profile.avatar_url}/>
    <h3>{profile.login}</h3>
    <button id="mainButton">Edit Profile</button>

    {repos.map(repo => (

<main>

  <div id="proTip">
    <p>ProTip! Updating your profile with your name, location and a profile picture helps other GitHub users get to know you. <button id="profileButton">Edit Profile</button></p>
  </div>


  <p>{repos.forks_url}</p>

  <div>
    <ul id="nav">
      <a href="https://github.com/MonetCarriere"><li>Overview</li></a>
      <a href="https://github.com/MonetCarriere?tab=repositories"><li>Repositories</li></a>
      <a href="https://github.com/MonetCarriere?tab=projects"><li>Projects</li></a>
      <a href="https://github.com/MonetCarriere?tab=stars"><li>Stars</li></a>
      <a href="https://github.com/MonetCarriere?tab=followers"><li>Followers</li></a>
      <a href="https://github.com/MonetCarriere?tab=following"><li>Following</li></a>
    </ul>
  </div>
    <p id="repo-name">{repo.name}</p>
    <p>Forked from PC-FEE-Master/React-Like-Button</p>


  </main>



    
    ))}
  </>
)
}







    

