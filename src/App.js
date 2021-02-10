import React, { Component,useState } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';
//import Radium, { StyleRoot } from 'radium';

// const app = props =>{
//  const [personsState, setPersonsState] = useState({
//     persons:[
//       {
//         name: 'Max',
//         age: 25
//       },
//       {
//         name: 'Max',
//         age: 25
//       },
//       {
//         name: 'Max',
//         age: 25
//       }
//     ],
//     otherState:"Other Persons State"
//   });
//   const [otherState, setOtherState] =  useState('New Values');
//   console.log(personsState,otherState);

//   const switchNameHandler= () => {
//     setPersonsState({persons:[
//      {
//        name: 'Max22',
//        age: 29
//      },
//      {
//        name: 'Max444',
//        age: 25
//      },
//      {
//        name: 'Max333',
//        age: 25
//      }
//     ]});
//    }

//   return (
//     <div className="row">
//       <div className="header col-sm-12">
//         <img src="header.PNG" height="auto" />
//       </div>
//       <div  className="sidebar2 col-sm-2">
//         <img src="sidebar.PNG" height="auto" />
//       </div>
//       <div className="bodys col-sm-10">
//         <img src="body.PNG" height="auto" />
//         <div className="row src">
//         <div className="source col-sm-12">
//       <button className="btn btn-primary" onClick={switchNameHandler}>Switch</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>My Hobbies:s<Person/><Person/>
//       </div>
//           </div>
//       </div>
      
//     </div>
//   );
// }

class App extends Component {
  state = {
    persons:[
      {
        id:1,
        name: 'Max1',
        age: 25
      },
      {
        id:2,
        name: 'Max2',
        age: 27
      },
      {
        id:3,
        name: 'Max3',
        age: 30
      }
    ],
    showPersons:false
  }

  deletePersoneHandler= (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  nameChangeHandler= (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id
    });
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    this.setState({persons:persons});
   }

   tooglePersonHandler(){
     this.setState({showPersons:!this.state.showPersons})
   }
  render() {
    // const StyledButton = styled.button`
    // background-color: ${props => props.alt ? 'red':'green'};
    //   color:white;
    //   font: inherit;
    //   border: 1px solid red;
    //   padding: 8px;
    //   cursor:pointer;

    //   &:hover{
    //     background-color: ${props => props.alt ? 'salmon':'lightgreen'};
    //     color:black;
    //   }
    // `;
    // const style = {
    //   backgroundColor: 'green',
    //   color:'white',
    //   font: 'inherit',
    //   border: '1px solid red',
    //   padding: '8px',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color:'black'
    //   }
    // }

    let persons = null;
    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((person, index) =>{
            
            console.log(this.state.persons);
            return <Person name={person.name} age={person.age} click={() => this.deletePersoneHandler(index)} changed={(event) => this.nameChangeHandler(event,person.id)} key={person.id}></Person>
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies:s</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'cssssshangdfgdf gfdg fdnes')} input={this.nameChangeHandler}>My Hobbies:Nothing</Person> */}
        </div>
      )
       //.backgroundColor= 'red';
      // style[':hover'] = {
      //   backgroundColor: 'pink',
      //   color: 'black'
      // }
    }

    let classes =[];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
      //<StyleRoot>
        <div className="row">
          {/* <div className="header col-sm-12">
            <img src="header.PNG" height="auto" />
          </div>
          <div  className="sidebar2 col-sm-2">
            <img src="sidebar.PNG" height="auto" />
          </div> */}
          <div className="bodys col-sm-10">
            {/* <img src="body.PNG" height="auto" /> */}
            <div className="row src App">
              <h1>This is my App</h1>
              <p className={classes.join(' ')}>this is really working</p>
              <div className="source col-sm-12">
              <button onClick={() => this.tooglePersonHandler()} className="button" >Toogle Persons</button>
                {/* <StyledButton alt={this.state.showPersons} onClick={() => this.tooglePersonHandler()} className="btn btn-primary">
                  Toogle Persons
                </StyledButton> */}
                {/* <button style={style} >Toogle Persons</button> */}
                {persons}
              </div>
            </div>
          </div>
          
        </div>
      //</StyleRoot>
    );
  }
}

//export default Radium(App);
export default App;