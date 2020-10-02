import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
    }

    componentDidMount() {
      axios
      .get(`https://api.github.com/users/HeathDanni`)
      .then(res => {
        console.log('res:', res)
      })
      .catch(err => {
        console.log('err:', err)
      })
    };

  render() {
    return (
    <div className="App">
     <h1>This is my app</h1>
    </div>
  );
}
}
export default App;
