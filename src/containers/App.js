import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultsForm from './results-form';


class App extends Component {
  render() {
    if (this.props.isLoading) {
      return <h1>Locating balls...</h1>;
    }
    if (this.props.loadError) {
      return <h1>{this.props.loadError}</h1>;
    }
    return (
      <div className="container">
        <ResultsForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.players.isLoading,
  loadError: state.players.loadError,
});


export default connect(mapStateToProps)(App);
