import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
    }
  render() {
    return (
    <div className="App">
     <h1>This is my app</h1>
    </div>
  );
}
}
export default App;
