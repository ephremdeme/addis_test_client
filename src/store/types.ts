export interface IEmployeeBase {
  name: string;
  birth_date: Date;
  gender: GenderEnum;
  salary: string;
}

export interface IEmployee extends IEmployeeBase {
  _id: string;
}

export interface IEmployeeState {
  employees: IEmployee[];
  employee?: IEmployee;
  loading?: boolean;
  done?: boolean;
  error?: string;
}

export enum GenderEnum {
  MALE = "Male",
  FEMALE = "Female",
  OTHER = "Other",
}
