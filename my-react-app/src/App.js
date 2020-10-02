import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
     user: {},
     followers: []
    }

    axios
    .get(`https://api.github.com/users/HeathDanni`)
    .then(res => {
      this.setState({user: res.data})
      console.log(res.data)
    })
    .catch(err => {
      console.log('err:', err)
    });

    }


    componentDidMount() {
      axios
        .get(`https://api.github.com/users/HeathDanni/followers`)
        .then(res => {
          console.log('res:', res.data)
          this.setState({followers: res.data})
        })
        .catch(err => {
          console.log('err:', err)
        })

  }


  render() {
    return(
      <div>
        <h1>Github Users</h1>
        <div className="flex-container">
          <UserCard user={this.state.user}/>
            {this.state.followers.map((user) => {
              return (
                <UserCard user={user} key={user.id}/>
              )
            })}
        </div>
      </div>
  
    )
  
}
}

export default App;
