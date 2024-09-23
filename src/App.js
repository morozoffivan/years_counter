
import { Component } from 'react';
import './App.css';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        years: 27,
        position: '',
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

    commitInputChanges = (e, pos) => {
       this.setState({
        position: pos + e.target.value,
       })
    }

  render() {
    const {name, surname} = this.props;
    const {position, years} = this.state;
    return (
      <div className='App'>
          <h1>
              {name} {surname} {position}
           </h1>
          <div>{years}</div>
          <button onClick={this.nextYear}>+</button>
          <button onClick={this.prevYear}>-</button>
          <form>
            <span>Введите должность</span>
            <input type="text" onChange={(e) => this.commitInputChanges(e, 'Position: ')} />
          </form>
      </div>
      
    )
  }

  }


export default App;
