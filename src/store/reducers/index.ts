import { ActionConstant, ActionTypes, GetEmployees } from "../actions/types";
import { IEmployee, IEmployeeState } from "../types";

const initialState: IEmployeeState = {
  employees: [],
};

export const employeeReducer = (
  state: IEmployeeState = initialState,
  action: ActionTypes
): IEmployeeState => {
  switch (action.type) {
    case ActionConstant.GET_EMPLOYEES:
      const { payload } = action as GetEmployees;
      return {
        ...state,
        loading: false,
        done: true,
        employees: payload,
        error: undefined,
      };
    case ActionConstant.GET_EMPLOYEE:
      return {
        ...state,
        loading: false,
        done: true,
        employee: action.payload as IEmployee,
        error: undefined,
      };
    case ActionConstant.SET_DONE:
      return {
        ...state,
        done: action.payload as boolean,
      };
    case ActionConstant.SET_LOADING:
      return {
        ...state,
        loading: action.payload as boolean,
      };
    case ActionConstant.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      };
    case ActionConstant.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload as IEmployee],
        loading: false,
        done: true,
        error: undefined,
      };
    case ActionConstant.UPDATE_EMPLOYEE:
      const updatedEmp = action.payload as IEmployee;
      return {
        ...state,
        employees: state.employees.map((emp) => {
          if (emp._id === updatedEmp._id) {
            return updatedEmp;
          }
          return emp;
        }),
        error: undefined,
        done: true,
        loading: false,
      };
    case ActionConstant.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (emp) => (action.payload as string) !== emp._id
        ),
        error: undefined,
        done: true,
        loading: false,
      };

    default:
      return state;
  }
};

export const loadingSelector = (state: IEmployeeState) => state.loading;
export const errorSelector = (state: IEmployeeState) => state.error;
export const doneSelector = (state: IEmployeeState) => state.done;
export const employeeSelector = (state: IEmployeeState) => state.employee;
export const employeesSelector = (state: IEmployeeState) => state.employees;
