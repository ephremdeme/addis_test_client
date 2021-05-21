import { IEmployee, IEmployeeBase } from "../types";

export interface GetEmployees {
  type: string;
  payload: IEmployee[];
}
export interface GetEmployee {
  type: string;
  payload: IEmployee;
}

export interface AddEmployee {
  type: string;
  payload: IEmployeeBase;
}

export interface UpdateEmployee {
  type: string;
  payload: IEmployee;
}
export interface DeleteEmployee {
  type: string;
  payload: string;
}
export interface LoadingAction {
  type: string;
  payload: boolean;
}
export interface ErrorAction {
  type: string;
  payload: string;
}
export interface DoneAction {
  type: string;
  payload: boolean;
}

export type ActionTypes =
  | LoadingAction
  | ErrorAction
  | UpdateEmployee
  | GetEmployees
  | GetEmployee
  | DeleteEmployee;

export const ActionConstant = {
  ADD_EMPLOYEE: "ADD_EMPLOYEE",
  DELETE_EMPLOYEE: "DELETE_EMPLOYEE",
  UPDATE_EMPLOYEE: "UPDATE_EMPLOYEE",
  GET_EMPLOYEES: "GET_EMPLOYEES",
  GET_EMPLOYEE: "GET_EMPLOYEE",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  SET_DONE: "DONE",
  SAGA_DELETE_EMPLOYEE: "SAGA_DELETE_EMPLOYEE",
  SAGA_UPDATE_EMPLOYEE: "SAGA_UPDATE_EMPLOYEE",
  SAGA_GET_EMPLOYEES: "SAGA_GET_EMPLOYEES",
  SAGA_GET_EMPLOYEE: "SAGA_GET_EMPLOYEE",
  SAGA_SET_EMPLOYEE: "SAGA_SET_EMPLOYEE",
  SAGA_SET_LOADING: "SAGA_SET_LOADING",
  SAGA_SET_ERROR: "SAGA_SET_ERROR",
  SAGA_ADD_EMPLOYEE: "SAGA_ADD_EMPLOYEE",
};
