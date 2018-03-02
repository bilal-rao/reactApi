import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import AccessTokenMiddleware from './store/middlewares/gettingData';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  height: 50,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


function mapDispatchToProps(dispatch) {
  return {
    checkApi: () => dispatch(AccessTokenMiddleware.asyncAcces())
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return {
    jsonData: state.sampleData ? state.sampleData.data.data : ''
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }
  handleApi() {
    console.log('sd')
    this.props.checkApi();
  }

  render() {
    console.log('input value:', this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleApi.bind(this)}>submit</button>
        {this.props.jsonData ? this.props.jsonData.map((data, index) => (
          <div key='index'>
            <MuiThemeProvider>
              <Paper style={style} zDepth={1}>
                {data.id}.
              {data.first_name}
              {data.last_name}
              </Paper>
            </MuiThemeProvider>
          </div>
        )) : ''}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
