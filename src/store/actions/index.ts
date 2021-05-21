import { IEmployee, IEmployeeBase } from "../types";
import {
  LoadingAction,
  ActionConstant,
  ErrorAction,
  AddEmployee,
  DeleteEmployee,
  GetEmployee,
  GetEmployees,
  DoneAction,
} from "./types";

export const setLoading = (loading: boolean): LoadingAction => ({
  type: ActionConstant.SET_LOADING,
  payload: loading,
});

export const setError = (error: string): ErrorAction => ({
  type: ActionConstant.SET_ERROR,
  payload: error,
});
export const setDone = (done: boolean): DoneAction => ({
  type: ActionConstant.SET_DONE,
  payload: done,
});

export const deleteEmployee = (id: string): DeleteEmployee => ({
  type: ActionConstant.DELETE_EMPLOYEE,
  payload: id,
});

export const setEmployees = (data: IEmployee[]): GetEmployees => ({
  type: ActionConstant.GET_EMPLOYEES,
  payload: data,
});
export const setEmployee = (data: IEmployee): GetEmployee => ({
  type: ActionConstant.GET_EMPLOYEE,
  payload: data,
});
export const addEmployee = (data: IEmployeeBase): AddEmployee => ({
  type: ActionConstant.ADD_EMPLOYEE,
  payload: data,
});
export const updateEmployee = (data: IEmployee): AddEmployee => ({
  type: ActionConstant.UPDATE_EMPLOYEE,
  payload: data,
});
