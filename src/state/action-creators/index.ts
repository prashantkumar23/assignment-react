import { ActionType } from '../action-types';
import {
    AddAction,
    SubtractAction,
    DivisonAction,
    MultiplyAction
} from '../actions';


export const Add = (value: number): AddAction => {
    return {
        type: ActionType.ADD,
        payload: value
    };
};

export const Subtract = (value: number): SubtractAction => {
    return {
        type: ActionType.SUBTRACT,
        payload: value
    };
};


export const Divison = (value: number): DivisonAction => {
    return {
        type: ActionType.DIVISON,
        payload: value
    };
};

export const Multiply = (value: number): MultiplyAction => {
    return {
        type: ActionType.MULTIPLY,
        payload: value
    };
};