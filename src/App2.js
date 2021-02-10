
import React, { Component,useState } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    
    state = {
        inputValue:
            {
              name: 'Max'
            }
      }

    nameChangeHandler= (event) => {
    this.setState({
        inputValue: {name:event.target.value}
    });
    }
  render() {
    const style = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px'
    }

    return (
      <div className="row">
        <div className="header col-sm-12">
          <img src="header.PNG" height="auto" />
        </div>
        <div  className="sidebar2 col-sm-2">
          <img src="sidebar.PNG" height="auto" />
        </div>
        <div className="bodys col-sm-10">
          <img src="body.PNG" height="auto" />
          <div className="row src">
              <UserInput inputValue={this.state.inputValue.name} input={this.nameChangeHandler} />
              <UserOutput inputValue={this.state.inputValue.name} />
            </div>
        </div>
        
      </div>
    );
  }
}

export default App;
