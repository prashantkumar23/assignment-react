import { ActionType } from '../action-types';


export interface AddAction {
    type: ActionType.ADD
    payload: number
}
export interface SubtractAction {
    type: ActionType.SUBTRACT
    payload: number
}
export interface DivisonAction {
    type: ActionType.DIVISON
    payload: number
}
export interface MultiplyAction {
    type: ActionType.MULTIPLY
    payload: number
}


export type Action =
    | AddAction | SubtractAction | DivisonAction | MultiplyAction
