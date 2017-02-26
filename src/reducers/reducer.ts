// Libraries and Middleware
import React = require("react");
import _ = require('lodash');
import update = require('immutability-helper');

// State
import { initialState } from './initial-state';

export function App(state: any = initialState, action: any) {
   var newState: any = _.assign({}, state);

   switch (action.type) {
     case 'UPDATE_GREETING':
       newState = update(state, {
         greeting: { $set: action.greeting }
       });
       return newState;

     default:
       return state;
   }
}