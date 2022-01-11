import { ActionType } from '../action-types';
import { Action } from '../actions';

export interface AppState {
    totalValue: number;
}

const initialState: AppState = {
    totalValue: 5,
};

const reducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD:
            return state.totalValue + action.payload
        case ActionType.SUBTRACT:
            return state.totalValue - action.payload
        case ActionType.DIVISON:
            return state.totalValue / action.payload
        case ActionType.MULTIPLY:
            return state.totalValue * action.payload
        default:
            return state
    }
}

export default reducer