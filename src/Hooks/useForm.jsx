import { useReducer } from "react";


const formReducer=(state,action)=>{
    switch(action.type){
        case 'CHANGE_INPUT':{
            let isFormValid=true;
            for (const inputID in state.inputs) {
                if (inputID === action.inputID) {
                  isFormValid = isFormValid && action.isValid;
                } else {
                  isFormValid = isFormValid && state.inputs[inputID].isValid;
                }
              }
              return {
                ...state,
                inputs: {
                  ...state.inputs,
                  [action.inputID]: {
                    value: action.value,
                    isValid: action.isValid,
                  },
                },
                isFormValid: isFormValid,
              };
            }
            default:{
                return state
            }

        }
    }


export const useForm=(initInput,initFormValid)=>{

    const[formState,dispatch]=useReducer(formReducer,{
        inputs:initInput,
        isFormValid:initFormValid
    })
    

    const onInputHandler=(id,value,isValid)=>{
        dispatch({
            type:'CHANGE_INPUT',
            value,
            isValid,
            inputID:id
        })
    }

    return[formState,onInputHandler]
}