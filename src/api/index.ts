import { axiosInstance } from "../config";
import { IEmployee, IEmployeeBase } from "../store/types";

export const fetchEmployees = async (): Promise<IEmployee[]> => {
  const res = await axiosInstance.get("/employees");

  if (res.status === 200 && res.data.data) {
    const employees: IEmployee[] = res.data.data;
    return employees;
  } else if (res.data.error) {
    throw new Error(res.data.error.message);
  } else {
    throw new Error("An Error Ocurred, Try Again Later!");
  }
};
export const fetchEmployee = async (id: string): Promise<IEmployee> => {
  const res = await axiosInstance.get(`/employees/${id}`);

  if (res.status === 200 && res.data.data) {
    const employee: IEmployee = res.data.data;
    return employee;
  } else if (res.data.error) {
    throw new Error(res.data.error.message);
  } else {
    throw new Error("An Error Ocurred, Try Again Later!");
  }
};

export const registerEmployee = async (
  data: IEmployeeBase
): Promise<IEmployee> => {
  const res = await axiosInstance.post("/employees", data);

  if (res.status === 200 && res.data.data) {
    const employee: IEmployee = res.data.data;
    return employee;
  } else if (res.data.error) {
    throw new Error(res.data.error.message);
  } else {
    throw new Error("An Error Ocurred, Try Again Later!");
  }
};
export const updateEmployeeInfo = async (
  data: Partial<IEmployee>
): Promise<IEmployee> => {
  const res = await axiosInstance.put(`/employees/${data._id}`, data);

  if (res.status === 200 && res.data.data) {
    const employee: IEmployee = res.data.data;
    return employee;
  } else if (res.data.error) {
    throw new Error(res.data.error.message);
  } else {
    throw new Error("An Error Ocurred, Try Again Later!");
  }
};
export const deleteEmployeeById = async (id: string) => {
  const res = await axiosInstance.delete(`/employees/${id}`);
  if (res.status === 200 && res.data.success) {
    const employee: IEmployee = res.data.data;
    return employee;
  } else if (res.data.error) {
    throw new Error(res.data.error.message);
  } else {
    throw new Error("An Error Ocurred, Try Again Later!");
  }
};
