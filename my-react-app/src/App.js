import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
     user: {},
     following: []
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
        .get(`https://api.github.com/users/HeathDanni/following`)
        .then(res => {
          console.log('res:', res.data)
          this.setState({following: res.data})
        })
        .catch(err => {
          console.log('err:', err)
        })

  }

    // componentDidUpdate(prevState, prevProps) {
    //   // if statements here equivalent to useEffect dependency array
    //   if (prevState.doggos !== this.state.doggos) {
    //     console.log("doggos have changed!");
    //   }


  render() {
    return(
      <div>
        <h1>my application</h1>
        <UserCard user={this.state.user}/>
        <div>
          {this.state.following.map((user) => {
            return (
              <UserCard user={user}/>
            )
          })}
        </div>
      </div>
  
    )
  
}
}

export default App;
