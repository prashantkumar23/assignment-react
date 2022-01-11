import { ActionType } from '../action-types';
import { Action } from '../actions';

export interface AppState {
    totalValue: number;
}

const initialState: AppState = {
    totalValue: 0,
};

const reducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD:
            return {
                totalValue: state.totalValue + action.payload
            }
        case ActionType.SUBTRACT:
            return {
                totalValue: state.totalValue - action.payload
            }
        case ActionType.DIVISON:
            return {
                totalValue: state.totalValue / action.payload
            }
        case ActionType.MULTIPLY:
            return {
                totalValue: state.totalValue * action.payload
            }
        default:
            return state
    }
}

export default reducer