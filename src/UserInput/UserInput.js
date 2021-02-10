
import React from 'react';
const  userInput = (props) => {
return (
    <div className="Person">
        <input type="text" value={props.inputValue}  onChange={props.input}></input>
    </div>
)
};

export default userInput;