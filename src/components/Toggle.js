import React from 'react';

const Toggle = (props) => (
  <div>
    <label className="switch">
      <input type="checkbox" onChange={props.onChangeHandler}/>
        <span className="slider round"></span>
    </label>
  </div>
);

export default Toggle;
