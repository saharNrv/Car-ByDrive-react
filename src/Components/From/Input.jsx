import React from 'react';

export default function Input(props) {

  const element=props.element ==='input'?(
    <input  
    type={props.type}
    placeholder={props.placeholder}
     />
  ):('')

  return (
    <div>
      {element}
    </div>
  );
}
