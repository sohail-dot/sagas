import React, { useState,useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {connect} from 'react-redux'
import './App.css';
import {apiCall,fetchGitHubUsers,setGitUserDetails} from './store/actions'
import{getGitUser} from './store/actions'
import {useDispatch} from 'react-redux'

const App = (props) => {
  const dispatch = useDispatch();
const[name,setName]=useState('');
const[userName,setUsername]=useState('');
const[followers,setFollowers]=useState('');
const[following,setFollowing]=useState('');
const[repos,setRepos]=useState('');
const[avatar,setAvatar]=useState('');
const[userInput,setUserInput]=useState('');
const[error,setError]=useState(null);
 useEffect(() => {
   fetch("https://api.github.com/users/example")
   .then(res => res.json())
   .then(data =>{
     setData(data)
   })
 }, [])

  useEffect(()=>{
    props.onFetchGitUse();
  },[])

 const setData = ({name,login,followers,following,public_repos,avatar_url}) =>{
  setName(name)
  setUsername(login)
  setFollowers(followers)
  setFollowing(following)
  setRepos(public_repos)
  setAvatar(avatar_url)
 }
 const handleSearch = (event) => {
   setUserInput(event.target.value)
 }
 const handleSubmit = () => {
  fetch(`https://api.github.com/users/${userInput}`)
  .then(res => res.json())
  .then(data =>{
    if(data.message){
      setError(data.message)
    }
    else{
      setData(data)
      setError(null)
    }
    
  })
}
    return (
      <div>
      <div className="navbar">GitHub Search</div>
      <div className="search">
      <Form onClick={handleSubmit}>
    <Form.Field>
      <input placeholder='GitHub User' name="github user" onChange={handleSearch} />
    </Form.Field>
    <Button type='submit' >Submit</Button>
  </Form>
      </div>
  {error? <div><h1>{error}</h1></div>:
  <div className="card">
  <Card>
  <Image src={avatar} wrapped ui={false} />
  <Card.Content>
    <Card.Header>{name}</Card.Header>
    <Card.Header>{userName}</Card.Header>
  </Card.Content>
  <Card.Content extra>
    <a>
      <Icon name='user' />
      {followers} followers
    </a>
  </Card.Content>
  <Card.Content extra>
    <a>
      <Icon name='user' />
      {repos} Repos
    </a>
  </Card.Content>
  <Card.Content extra>
    <a>
      <Icon name='user' />
      {following} Following
    </a>
  </Card.Content>
  <Card.Content extra>
    <a>
      <Icon name='user' />
      {props.nam} Following
    </a>
  </Card.Content>
</Card>

  </div>
  }
  
    <button onClick={props.onApiCall}>Name CALL {props.nam}</button>
    <button onClick={props.onFetchGitUse}>API CALL</button>
    <div>{props.data.map((user)=><p>{user.name}</p>)}</div>
    <div>
      <button onClick={()=>{
        dispatch(getGitUser())
      }}>get saga data</button>
    </div>
      </div>
      
    );
  }
const mapStateToProps = (state) => {
  return{
    nam:state.nam,
    data:state.data
  }
}
const mapDispatchToProps= dispatch =>{
  return{
    onApiCall: ()=>dispatch(apiCall()),
    onFetchGitUser: () => dispatch(setGitUserDetails()),
    onFetchGitUse: () => dispatch(fetchGitHubUsers())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
