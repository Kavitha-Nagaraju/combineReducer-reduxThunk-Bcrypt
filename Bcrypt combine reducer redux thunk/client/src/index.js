import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk';



let initialStore={
   loginDetails:{},
}
let reducer = (latestStore=initialStore, dispatchedObj)=>{
  if(dispatchedObj.type ==="login"){
    return{...latestStore,loginDetails:dispatchedObj.data}
  }
  return latestStore;

};

let taskReducer =(latestStore=initialStore,dispatchedObj)=>{
  if(dispatchedObj.type==="addTask"){
    return{...latestStore,loginDetails:dispatchedObj.data};
  }
  else if(dispatchedObj.type==="deleteTask"){
    return{...latestStore,loginDetails:dispatchedObj.data};

  }
  else if(dispatchedObj.type==="approveTask"){
    return{...latestStore,loginDetails:dispatchedObj.data};
  }
  else if(dispatchedObj.type==="rejectTask"){
    return{...latestStore,loginDetails:dispatchedObj.data};
  }
 return latestStore;
};


let leavesReducer =(latestStore=initialStore,dispatchedObj)=>{
  if(dispatchedObj.type==="addLeaves"){
    return{...latestStore,loginDetails:dispatchedObj.data};
  }
  else if(dispatchedObj.type==="deleteLeaves"){
    return{...latestStore,loginDetails:dispatchedObj.data};

  }
  else if(dispatchedObj.type==="approveLeaves"){
    return{...latestStore,loginDetails:dispatchedObj.data};
  }
  else if(dispatchedObj.type==="rejectLeaves"){
    return{...latestStore,loginDetails:dispatchedObj.data};
  }
 return latestStore;
};



let store =createStore(combineReducers({reducer,taskReducer,leavesReducer}),applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
