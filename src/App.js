
import { Component } from 'react';
import './App.css';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        years: 27,
      }
    }

    nextYear = () => {
      this.setState(state => ({
        years: state.years + 1
      }))
    }

    prevYear = () => {
      this.setState(state => ({
        years: state.years - 1,
      }))
    }
  render() {
    const {name, surname} = this.props;
    return (
      <div className='App'>
          <h1>{name} {surname}</h1>
          <div>{this.state.years}</div>
          <button onClick={this.nextYear}>+</button>
          <button onClick={this.prevYear}>-</button>
      </div>
      
    )
  }

  }


export default App;
