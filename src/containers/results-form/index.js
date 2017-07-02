import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultsForm from './ResultsForm.js'

class ResultsFormContainer extends Component {
  render() {
    return (
      <ResultsForm />
    );
  }
}

export default connect()(ResultsFormContainer);
