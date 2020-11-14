import React, {Component, Fragment} from 'react';
import Navigation from './components/Navigation/Navigation';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Navigation title={this.props.appTitle}/>
      </div>
    );
  }
}

export default App;
