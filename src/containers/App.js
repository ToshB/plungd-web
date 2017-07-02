import React, { Component } from 'react';
import ResultsForm from './results-form';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Who won?</h2>
          <ResultsForm />
        </div>
      </div>
    );
  }
}

export default App;
