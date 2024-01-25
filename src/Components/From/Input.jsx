import React, { useReducer,useEffect } from 'react';
import validator from '../../Validators/Validators';


const inputReducer=(state,action)=>{
  switch(action.type){
    case 'CHANGE':{
      return{
           ...state,
           value:action.value,
           isValid:validator(action.value,action.validations)
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
const { value, isValid } = mainInput;
  const { id, onInputHandler } = props;

  useEffect(() => {
    onInputHandler(id, value, isValid);
  }, [value]);


const onChangeHandler=(event)=>{
  console.log(event.target.value);
  dispatch({
    type:'CHANGE',
    value:event.target.value,
    validations:props.validations,
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
