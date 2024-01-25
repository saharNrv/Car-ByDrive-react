import React, { useReducer } from 'react';


const inputReducer=(state,action)=>{
  switch(action.type){
    case 'CHANGE':{
      return{
           ...state,
           value:action.value,
           isValid:action.isValid
      }
    }
    default:{
      return state
    }
  }

}

export default function Input(props) {
  console.log(props.validations);

const[mainInput,dispatch]=useReducer(inputReducer,{
  value:'',
  isValid:false
})

const onChangeHandler=(event)=>{
  console.log(event.target.value);
  dispatch({
    type:'CHANGE',
    value:event.target.value,
    isValid:true
  })
}

  const element=props.element ==='input'?(
    <input  
    type={props.type}
    className={`${mainInput.isValid?'success-input':'error-input'}`}
    placeholder={props.placeholder}
    value={mainInput.value}
    onChange={onChangeHandler}
     />
  ):('')

  return (
    <div>
      {element}
    </div>
  );
}
