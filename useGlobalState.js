import React from 'react';
import { globalStateContext } from './components/context.js';
import { dispatchStateContext } from './components/context.js';


export default function useGlobalState(props){
    return [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ]
}