
import React from 'react';
import './Person.css';
//import Radium from 'radium';
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 60%;
margin:16px auto;
box-shadow: 0 2px 3px #ccc;
padding:16px;
text-align:center;

@media (min-width: 500px)  {
    width: 450px;
}`;
const  person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // }
return (
    //<div className="Person" style={style}>
    <StyledDiv>
        <p onClick={props.click}>I am  {props.name} and {props.age}</p>
        <p>{props.children}</p>
        <input type="text" value={props.name}  onChange={props.changed}></input>
    </StyledDiv>
)
};
export default person;
//export default Radium(person);